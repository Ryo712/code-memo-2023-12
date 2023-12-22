/*Reactイベントハンドリング
ユーザーのアクション（クリック、入力など）に対する応答として特定のコードを実行する方法です。*/
import React from 'react';

class ButtonComponent extends React.Component {
  // イベントハンドラメソッド
  handleClick() {
    console.log('Button clicked!');
  }

  render() {
    return (
      // onClickプロパティにイベントハンドラメソッドを指定
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

export default ButtonComponent;

/*ButtonComponent クラス内で handleClick というメソッドを定義しています。
そして、<button> 要素において、onClick プロパティに this.handleClick を指定しています。
これにより、ボタンがクリックされると、handleClick メソッドが呼び出されます。 */