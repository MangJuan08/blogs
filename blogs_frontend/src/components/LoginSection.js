import React from "react";

const LoginSection = ({ handleSubmit, login, setLogin }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">DAJUAN</h5>
              <br></br>
              <form
                className="row gx-3 gy-2 align-items-center"
                onSubmit={handleSubmit}
              >
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="username"
                  aria-label=".form-control-lg example"
                  name="username"
                  onChange={(e) => setLogin(e.target.value)}
                ></input>
                <br></br>
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="password"
                  aria-label=".form-control-lg example"
                  name="password"
                  onChange={(e) => setLogin(e.target.value)}
                ></input>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;

/*   <form
        className="row gx-3 gy-2 align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="col-sm-3">
          <label className="visually-hidden" htmlFor="Username">
            USername
          </label>
          <div className="input-group">
            <div className="input-group-text">USER</div>
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
            <div className="input-group-text">PASSWORD</div>
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="Password"
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
      <br></br>
      <br></br>
      <br></br>*/
