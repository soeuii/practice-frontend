import React from "react";
import { isLoggedInVar } from "../apollo"

export const LoggedInRouter = () => (
  <div>
    <h1>Logged in</h1>
    <button onClick={() => isLoggedInVar(false)}>Log out</button>
  </div>
);