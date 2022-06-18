import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [selectFrom, setSelectFrom] = useState('usd');
  const [selectTo, setSelectTo] = useState('uah');

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  const convertationFrom = () => {
    axios
      .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectFrom}/${selectTo}.json`)
      .then(data=>{
        setTo(data.data[selectTo]*from);
      });
  }

  const convertationTo = () => {
    axios
      .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectTo}/${selectFrom}.json`)
      .then(data=>{
        setFrom(data.data[selectFrom]*to);
      });
  }  

  const onSelectFromHandler = (e) => {
    setSelectFrom(e.target.value);
    convertationFrom();
  }

  const onSelectToHandler = (e) => {
    setSelectTo(e.target.value);
    convertationTo();
  }

  const onFromHandler = (e) => {
    setFrom(e.target.value);
    convertationFrom();
  }

  const onToHandler = (e) => {
    setTo(e.target.value);
    convertationTo();
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Select "from" currency</h1>
          <select
            name="from"
            value={selectFrom}
            onChange={onSelectFromHandler}
          >
            <option value="usd">USD</option>
            <option value="uah" selected>UAH</option>
            <option value="eur">EUR</option>
          </select>
          <input type="number" value={from} onChange={onFromHandler} />
        </div>
        <div>
          <h1>Select "to" currency</h1>
          <select
            name="to"
            value={selectTo}
            onChange={onSelectToHandler}
          >
            <option value="usd">USD</option>
            <option value="uah" selected>UAH</option>
            <option value="eur">EUR</option>
          </select>
          <input type="number" value={to} onChange={onToHandler} />
        </div>
      </header>
    </div>
  );
}

export default App;
