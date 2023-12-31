// pages/index.js

import React, { useState } from 'react';

const CounterApp = () => {
  // カウントを管理するstate変数とその更新関数を作成
  const [count, setCount] = useState(0);

  // ボタンがクリックされたときにカウントを増やす関数
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>カウンターアプリケーション</h1>
      <p>現在のカウント: {count}</p>
      {/* ボタンがクリックされたときに handleIncrement 関数が呼ばれる */}
      <button onClick={handleIncrement}>+1</button>
    </div>
  );
};

export default CounterApp;
