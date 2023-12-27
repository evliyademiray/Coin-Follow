import React, { useEffect, useState } from "react";
import DetailView from "../views/DetailView";
import Model from "../models/DetailModel";
import { useParams } from "react-router-dom";

const DetailController = () => {
  const [coin, setCoin] = useState(null);

  //1-URL'den id'yi al
  const { id } = useParams();
  //2-Coin'in detay verilerini al ve fiyat geçmişi al
  useEffect(() => {
    Model.getCoinDetails(id).then((data) => setCoin(data));
  }, []);

//Modelden bir örnek oluşturma
//Örnek oluştururken coin bilgilerini gönderdik
//Model ise gönderdiğimiz bilgiler birlikte view bileşeni kullanacağımız veriyi oluşturdu
  const model = new Model(coin);
  
  
  return <DetailView model={model}/>;

};

export default DetailController;
