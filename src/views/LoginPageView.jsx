import React from "react";
import InputFieldView from "../views/InputFieldView";
import { inputs } from "../constants";

const LoginPageView = ({ formik }) => {
  return (
    <div className="login-page">
      <div className="container my-5">
        <h2 className="d-flex gap-3 justify-content-center align-items-center ">
          <img height={60} src="/c-logo.png" />
          <span>CoinCaseTurk</span>
        </h2>
        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data) => (
            <InputFieldView formik={formik} data={data} />
          ))}

          <button type="submit">Kaydol</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPageView;
