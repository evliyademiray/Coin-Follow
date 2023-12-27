import LoginPageView from "../views/LoginPageView";
import { useFormik } from "formik";
import React from "react";
import { schema } from "../schema";
import { useNavigate } from "react-router-dom";

const LoginPageController = () => {
  const navigate = useNavigate();
  //Useformik > formik'in tüm özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    //Form'da tutulacak verilerin ilk değeri
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    //Validasyon şeması tanımlandığı zaman formik inputlardaki verilerin
    // şemadaki  koşullara uygun olmasını bekler.
    //Uygun değilse içerisinde error state'inde hataları tutar.
    validationSchema: schema,
    //Form gönderilince çalışır
    //?Bu fonksiyon otomatik olarak sayfayı yenilemeyi engeller
    //2 parametre alır
    //1- param: object formatındaki inputların verisi
    //2- param: formda bazı işlemler (sıfırlama) yapmamızı sağlar
    onSubmit: (values, actions) => {
      navigate("/home");
    },
  });
  return <LoginPageView formik={formik} />;
};

export default LoginPageController;
