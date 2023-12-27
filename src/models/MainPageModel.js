import axios from "axios";

export default class MainPageModel {
  static async getCoins(page) {
    //offset: atlanacak eleman sayısı
    //limit: gelecek eleman sayısı
    //doğru sayfadaki elemanlara erişmek için sayfa sayısını
    // limit ile çarparız
    //3'üncü sayfadaki veriyi almak için ilk 30 veriyi atlamak gerekir
    const params = {
      offset: (page - 1) * 20,
      limit: 20,
    };

    try {
      const res = await axios.get("https://api.coincap.io/v2/assets", {
        params,
      });
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
}
