import React  from "react";

import { Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Admin } from "./pages/Admin";
import { User } from "./pages/User";


const App = () => {
 


  return (
    <div className="App container">
      <br></br><br></br>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </div>
  );
};

export default App;
/**/
