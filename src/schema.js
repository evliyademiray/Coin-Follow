import * as yup from "yup";
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";
//Validasyon Şeması
//Formdaki inputların geçerli olması için gerekli koşulları
// tanımladığımız yapı

//Input alanı için koşulları tanımlarken kullanmamız gereken ilk
//yup fonksiyonu verinin tipi olmalı
//devamına ise zincirleme fonksiyonlar şeklinde koşulları sıralarız

export const schema = yup.object().shape({
  //email için zorunluluklar
  email: yup
    .string()
    .email("Lütfen geçerli bir email formatı giriniz")
    .required("Email alanı zorunludur"),
  //yaş için zorunluluklar
  age: yup
    .number()
    .min(18, "18den küçük olamaz")
    .max(100, "100den büyük olamaz")
    .integer("Tam yaş giriniz")
    .required("Zorunlu alan"),
  //şifre için zorunluluklar
  password: yup
    .string()
    .min(5, "5 karakterden az olamaz")
    //Şifre regex kurallarına uyuyor mu kontrol et
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Şifre alanı zorunludur"),

  //şifre onayı için zorunluluklar
  confirmPassword: yup
    .string()
    //oneOf : inputtaki veri, verdiğimiz dizideki metinlerden biriyle eşleşiyor mu
    //ref() farklı input alanlarındaki veriyi çağırmaya yarar
    .oneOf([yup.ref("password")], "Şifre uyuşmuyor")
    .required("Şifre alanı zorunludur"),
});
