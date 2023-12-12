// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//Next.jsのAPIルートは、/pages/apiディレクトリ内に配置される特別なエンドポイントで、サーバーサイドロジックを実行できる。
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}
/*Dataという型を定義。この型は、APIルートが返すデータの構造を表しており、nameというプロパティが文字列型であることが期待されています。 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
/*この関数は、APIルートのエンドポイントがリクエストを受け取った際に実行されます。
関数の引数としてNextApiRequest型のreq（リクエスト）とNextApiResponse<Data>型のres（レスポンス）が指定されています。 */