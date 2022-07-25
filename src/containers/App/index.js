import Header from "common/Header/Header";
import HomePage from "components/Home/HomePage";
import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
// import { interceptor } from "utils/interceptor";
// import HomeContainer from "containers/Home/homeContainer";
import Login from "../../components/login/Login";
export default function App() {
  // interceptor();
  return (
    <Fragment>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomeContainer />} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Fragment>
  );
}
