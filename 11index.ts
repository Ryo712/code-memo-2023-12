import { db } from '../../../firebase'; // Firebase設定ファイルへの正しいパスを指定
import { collection, getDocs, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const itemsCollection = collection(db, 'items');
      const snapshot = await getDocs(itemsCollection);
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
//GET:itemsコレクションから全てのドキュメントを取得している。    
  } else if (req.method === 'POST') {
    try {
      const { name, description } = req.body;
      const docRef = await addDoc(collection(db, 'items'), { name, description });
      res.status(201).json({ id: docRef.id, name, description });
    } catch (error) {
      res.status(400).json({ error: 'Unable to create item' });
    }
  }
}
//POST:リクエストボディからnameとdescriptionを取得し、それらを使用して新しいドキュメントを作成する。
//GET POSTのHTTPリクエスト