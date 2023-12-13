import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
//useStateフックを使用して、nameとdescriptionという2つのステート変数を宣言しています。これらはそれぞれアイテムの名前と説明を保持します。
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();//フォームのデフォルトの送信動作を防ぎます。
    await axios.post('/api/items', { name, description });
    setName('');
    setDescription('');
    // リストを更新する処理を追加 handleSubmit:フォームが送信されたときに呼び出される
/*/api/itemsエンドポイントに対してnameとdescriptionを含むデータをPOSTリクエストで送信します。 */    
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        className="border p-2"
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Item
      </button>
    </form>
  );
};

export default ItemForm;
/*<input>と<textarea>にはそれぞれvalueとonChangeが設定されています。これにより、ユーザーが入力した値がステート変数に反映され、
フォームの送信時にそれらの値が使用されます。ボタンがクリックされると、フォームが送信されます。 */