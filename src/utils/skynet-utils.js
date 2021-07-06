// skynet operation functions

export function mySkyReadJsonFile() {}

export function mySkyWriteJsonFile() {}

export function mySkyDeleteJsonFile() {}

export function mySkyUpdateJsonFile() {}

export async function handleMySkyLogin(mySky, dispatch) {
  // Try login again, opening pop-up. Returns true if successful
  const status = await mySky.requestLoginAccess();

  if (status) {
    const userID = await mySky.userID();
    dispatch({
      type: "updateField",
      fieldName: "userID",
      value: userID,
    });
  }
  dispatch({
    type: "updateField",
    fieldName: "loggedIn",
    value: status,
  });
}

export async function handleMySkyLogout(mySky, dispatch) {
  // call logout to globally logout of mysky
  await mySky.logout();

  //set react state
  dispatch({
    type: "updateField",
    fieldName: "loggedIn",
    value: false,
  });
  dispatch({
    type: "updateField",
    fieldName: "userID",
    value: "",
  });
}
