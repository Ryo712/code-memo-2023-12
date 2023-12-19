// app.ts
import express, { Request, Response } from 'express';
//Request インターフェースは、リクエストに関する情報を含んでおり、Response インターフェースは、レスポンスに関する操作を提供
const app = express();
const port = 3000;

// Bodyをパースするためのミドルウェアを有効化
app.use(express.json());

app.post('/api/items', (req: Request, res: Response) => {
  try {
    // リクエストから送信されたデータを取得
    const { name, description } = req.body;

    // ここにデータベースへのアイテムの追加ロジックを追加
    // 例: ダミーのデータベースにアイテムを追加
    
    const newItem = { id: 4, name, description };

    res.status(201).json({ item: newItem, message: 'Item created successfully' });
  } catch (error) {
    console.error('Error processing POST request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// アプリケーションを指定されたポートでリッスンし、サーバーを起動