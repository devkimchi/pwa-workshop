import React from 'react';
import { useState } from 'react';
import './App.css';

const Write = (props) => {
  const {addData} = props;
  const [content, setContent] = useState('');

  const handleWriting = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(content);
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea onChange={handleWriting} value={content} />
      <button>전송하기</button>
    </form>
  )
}

const List = (props) => {
  const { data } = props;

  return (
    <div className="list">
      {data.map(item => (
        <div key={item.id}>{item.value}</div>
      ))}
    </div>
  )
}

const App = () => {
  const [data, setData] = useState([]);

  const addData = (content) => {
    const id = data.length + 1;

    setData([
      ...data,
      {
        id: id,
        value: content
      }
    ])
  }

  return (
    <div className="notes">
      <Write addData={addData} />
      <h1>List:</h1>
      <List data={data} />
    </div>
  )
}

export default App;
