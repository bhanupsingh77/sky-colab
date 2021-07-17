/* This example requires Tailwind CSS v2.0+ */
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import DashboardNavBar from "./DashboardNavBar.js";
import Document from "../document/Document.js";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

export default function Dashboard() {
  let { path, url } = useRouteMatch();
  return (
    <Router>
      <div className="w-screen flex fixed">
        <DashboardNavBar url={url} />
        <div className="h-screen w-full overflow-auto">
          {/* content */}
          <Switch>
            <Route exact path={path}>
              <h3>Please select a topic.</h3>
            </Route>
            <Route path={`${path}/team`}>
              <h1>tesan</h1>
            </Route>
            <Route path={`${path}/documents`}>
              <Document />
            </Route>
            <Route path={`${path}/:id`}>
              <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold text-gray-900">
                    Dashboard
                  </h1>
                </div>
              </header>
              <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  <div className="px-4 py-6 sm:px-0">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                  </div>
                </div>
              </main>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
