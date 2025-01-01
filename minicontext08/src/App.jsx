import { useState } from "react";
import "./App.css";
import Login from "./assets/components/Login";
import UserContextProvider from "./assets/context/UserContextProvider";
import Profile from "./assets/components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>Hey this is it</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
