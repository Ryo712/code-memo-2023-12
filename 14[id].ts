// app/pages/api/items/[id].ts
import { db } from '../../../firebase'; // Firebase設定ファイルへの正しいパスを指定
import { doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      const itemRef = doc(db, 'items', id as string);
      const { name, description } = req.body; //req.body から name と description を取得し、それを使ってアイテムを更新しています。
      await updateDoc(itemRef, { name, description });
      res.status(200).json({ id, name, description });
    } catch (error) {
      res.status(400).json({ error: 'Unable to update item' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const itemRef = doc(db, 'items', id as string);
      await deleteDoc(itemRef);
      res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Unable to delete item' });
    }
  } else if (req.method === 'GET') {
    try {
      const itemRef = doc(db, 'items', id as string);
      const snapshot = await getDoc(itemRef);
      if (!snapshot.exists()) {
        res.status(404).json({ error: 'Item not found' });
      } else {
        res.status(200).json({ id: snapshot.id, ...snapshot.data() });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
/*リクエストのHTTPメソッドに応じて、更新（PUT）、削除（DELETE）、取得（GET）の処理を分岐しています。 */
/*GET メソッドの場合、指定されたアイテムのドキュメントを取得します。ドキュメントが存在しない場合は 
404 エラーを、存在する場合はドキュメントのデータをレスポンスとして返します。 */