import React from "react";
import {Provider} from "react-redux";
import { store } from "./redux/store";
import Signup from "./components/Signup";
import SuccessScreen from "./components/successScreen";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/success" element={<SuccessScreen />} />
        </Routes>
    )
}

export default App;
