//SSG の使用方法:getStaticPropsの実装

// pages/index.tsx

import React from 'react';

const HomePage: React.FC = ({ data }) => {
  return (
//HomePageはReact関数コンポーネントで、Next.jsアプリケーションのホームページを表します。  
//ページにはdataプロパティが含まれる。  
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>Static data: {data}</p>
    </div>
  );
};

export async function getStaticProps() {
  // ビルド時にデータのフェッチなどを行う
  const data = 'Static data for the page';
  return {
    props: {
      data,
    },
  };
}
/*getStaticProps 関数:この関数内で、データのフェッチや他の非同期な操作が行われます。
この例では、単純な文字列 ('Static data for the page') を data プロパティとして取得しています。 */
/*propsプロパティを含むオブジェクトを返します。
propsプロパティには、ページコンポーネントに渡すデータが含まれています。このデータはビルド時に取得されるため、
静的なコンテンツとしてページに埋め込まれます。
ページコンポーネントでの使用:HomePage コンポーネント内で data プロパティが使用され、ホームページに静的なデータが表示されます。*/