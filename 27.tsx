// Nextのindex.tsxファイル

/*Next.js プロジェクトにおいて特別な意味を持つファイルで、ルートページ（トップレベルのページ）として機能します。
Next.js では、pages ディレクトリ内のファイルが自動的にルーティングとして処理されますが、index.tsx ファイルはその特別なケースで、デフォルトで / パスに対応します。
・デフォルトのルートページ:つまり'/' パスにアクセスしたときにこのファイルが表示されます。

コンポーネントのエクスポート:index.tsx ファイルでは、React コンポーネントがエクスポートされることが一般的です。このコンポーネントが実際のページの内容を表現します*/

// pages/index.tsx

import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is the default home page.</p>
    </div>
  );
};

export default HomePage;

/*HomePage という React コンポーネントが作成され、export default を使ってエクスポートされています。
このコンポーネントが、index.tsx が表示するコンテンツを定義しています。 */