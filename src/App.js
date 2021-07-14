import React, { useState, useEffect, useReducer } from "react";
// import { ContentRecordDAC } from "@skynetlabs/content-record-library";
// import { SkynetClient } from "skynet-js";
import { CLIENT, CONTENT_RECORD, DATA_DOMAIN } from "./utils/skynet-ev.js";
import { handleMySkyLogin, handleMySkyLogout } from "./utils/skynet-utils.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./component/LandingPage.js";
import Dashboard from "./dashboard/Dashboard.js";

const stateReducer = (prevState, action) => {
  switch (action.type) {
    case "updateField":
      return {
        ...prevState,
        [action.fieldName]: action.value,
      };
    default:
      throw new Error(`unknown action type ${action.type}`);
  }
};

export default function App() {
  const [mySky, setMySky] = useState();
  const [state, dispatch] = useReducer(stateReducer, {
    loggedIn: false,
    userID: null,
    loadingMySky: false,
  });

  // call async setup function\
  // On initial run, start initialization of MySky
  useEffect(() => {
    async function initMySky() {
      try {
        // load invisible iframe and define app's data domain
        // needed for permissions write
        const mySky = await CLIENT.loadMySky(DATA_DOMAIN);
        // console.log(mySky);

        // load necessary DACs and permissions
        await mySky.loadDacs(CONTENT_RECORD);

        // check if user is already logged in with permissions
        const loggedIn = await mySky.checkLogin();

        setMySky(mySky);
        dispatch({
          type: "updateField",
          fieldName: "loggedIn",
          value: loggedIn,
        });

        if (loggedIn) {
          const userID = await mySky.userID();
          dispatch({
            type: "updateField",
            fieldName: "userID",
            value: userID,
          });
        }

        dispatch({
          type: "updateField",
          fieldName: "loadingMySky",
          value: false,
        });
      } catch (e) {
        alert(e);
        console.error(e);
      }
    }

    initMySky();
  }, []);

  console.log(`state ${state.loggedIn}`);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage
              loggedIn={state.loggedIn}
              handleMySkyLogin={() => handleMySkyLogin(mySky, dispatch)}
              handleMySkyLogout={() => handleMySkyLogout(mySky, dispatch)}
            />
          </Route>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}
