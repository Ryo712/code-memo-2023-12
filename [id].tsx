// pages/items/[id].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      axios.get(`/api/items/${id}`)
        .then(response => {
          setItem(response.data);
          setName(response.data.name);
          setDescription(response.data.description);
        })
        .catch(error => console.error('Error fetching item:', error));
    }
  }, [id]);

  const handleUpdate = () => {
    axios.put(`/api/items/${id}`, { name, description })
      .then(response => {
        setItem(response.data);
        setIsEditing(false);
      })
      .catch(error => console.error('Error updating item:', error));
  };

  const handleDelete = () => {
    axios.delete(`/api/items/${id}`)
      .then(() => {
        router.push('/items'); // Redirect to the list page
      })
      .catch(error => console.error('Error deleting item:', error));
  };
/*アイテムを更新するためのhandleUpdate関数と、アイテムを削除するためのhandleDelete関数が定義されています。
これらの関数はAxiosを使用して対応するAPIエンドポイントにリクエストを送信します */
  if (!item) return <div>Loading...</div>;
//itemがロードされていない場合には"Loading..."と表示されます。
  return (
    <div>
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
          />
          <textarea 
            value={description} 
            onChange={e => setDescription(e.target.value)}
          ></textarea>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
//編集モードでは更新とキャンセルのボタンが表示され、それぞれのボタンがクリックされたときに対応する関数が呼び出されます。