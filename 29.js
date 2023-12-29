// Next 外部モジュールのインポート
import axios from 'axios';

// Axiosを使用したデータの取得
const fetchData = async () => {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
//指定されたURLからデータを非同期に取得するHTTP GETリクエストを送信します。    
  } catch (error) {
//catch ブロックでは、何らかのエラーが発生した場合にエラーをキャッチして、コンソールにエラーメッセージを表示します。    
    console.error('Error fetching data:', error);
  }
};
//async/awaitは非同期処理を扱うためのキーワードで、awaitは非同期関数内でPromiseが完了するまで待機します。