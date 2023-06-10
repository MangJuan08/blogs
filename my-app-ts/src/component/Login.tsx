import React from "react";
import { ILogin } from "../model/login";

export const Login = ({username,password,handleSubmit, setUser, setPassword} : ILogin) => {
  return (
    <div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="Enter a term"
          className="input"
          name="username"
        /> <br></br> <br></br>
          <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Enter a term"
          className="input"
          name="username"
        /> <br></br> <br></br>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
