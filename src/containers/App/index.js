import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { interceptor } from "utils/interceptor";
// import HomeContainer from 'containers/Home/homeContainer';
import { Login } from "components/login/Login";

export default function App() {
  interceptor();
  return (
    <Fragment>
      <Routes>
        {/* <Route path="/" element={<HomeContainer />} /> */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Fragment>
  );
}
