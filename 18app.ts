// app.ts HTTP GETメソッド例
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/api/items', (req: Request, res: Response) => {
  // ここにデータベースからアイテムのリストを取得するロジックを追加
  const items = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
  ];

  res.json({ items });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

///api/itemsパスに対してのGETリクエストに応じて、ダミーのアイテムリストをJSON形式で返します