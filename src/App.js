import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from './key';

function App() {

  const [selectFrom, setSelectFrom] = useState('value1');
  const [selectTo, setSelectTo] = useState('value1');

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  const [eur, setEur] = useState(0);
  const [uah, setUah] = useState(0);

  useEffect(()=>{
    axios
      .get("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/eur.json")
      .then(data=>{
        setEur(data.data.eur);
        console.log(eur);
      });
    axios
      .get("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/uah.json")
      .then(data=>{
        setUah(data.data.uah);
        console.log(uah);
      })

  }, []);

  useEffect(()=>{
    convertationFromTo();
  }, [from, selectFrom]);
  useEffect(()=>{
    convertationToFrom();
  }, [to, selectTo]);  

  const convertationFromTo = () => {

  }

  const convertationToFrom = () => {

  }

  const onSelectFromHandler = (e) => {
    console.log(e.target.value);
    setSelectFrom(e.target.value);
  }

  const onSelectToHandler = (e) => {
    setSelectTo(e.target.value);
  }

  const onFromHandler = (e) => {
    setFrom(e.target.value);
  }

  const onToHandler = (e) => {
    setTo(e.target.value);
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
            <option value="USD">USD</option>
            <option value="UAH" selected>UAH</option>
            <option value="EUR">EUR</option>
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
            <option value="USD">USD</option>
            <option value="UAH" selected>UAH</option>
            <option value="EUR">EUR</option>
          </select>
          <input type="number" value={to} onChange={onToHandler} />
        </div>
      </header>
    </div>
  );
}

export default App;
