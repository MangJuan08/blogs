import React, { useState } from "react";

const LoginSection = ({ handleSubmit, login, setLogin }) => {
  return (
    <div>
      <form
        className="row gx-3 gy-2 align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="col-sm-3">
          <label className="visually-hidden" htmlFor="Username">
            USername
          </label>
          <div className="input-group">
            <div className="input-group-text">@</div>
            <input
              type="text"
              className="form-control"
              id="Username"
              placeholder="Jane Doe"
              name="username"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <label className="visually-hidden" htmlFor="Password">
            Password
          </label>
          <div className="input-group">
            <div className="input-group-text">@</div>
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="Username"
              name="password"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginSection;
