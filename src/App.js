import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [selectFrom, setSelectFrom] = useState('usd');
  const [selectTo, setSelectTo] = useState('uah');

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  const [isFrom, setIsFrom] = useState(false);
  const [isTo, setIsTo] = useState(false);

  const [usdInfo, setUsdInfo] = useState(0);
  const [eurInfo, setEurInfo] = useState(0);

  useEffect(()=>getStartInfo(), []);

  const getStartInfo = () => {
    axios
      .get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/uah.json')
      .then(data=>{
        setEurInfo(roundFunc(data.data.uah));
      });    
    axios
      .get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/uah.json')
      .then(data=>{
        setUsdInfo(roundFunc(data.data.uah));
      })
  }

  const roundFunc = (num) => {
    return Math.round(num*100)/100;
  }

  const convertationFrom = () => {
    axios
      .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectFrom}/${selectTo}.json`)
      .then(data=>{
        setTo(roundFunc(data.data[selectTo]*from));
      });
  }

  const convertationTo = () => {
    axios
      .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectTo}/${selectFrom}.json`)
      .then(data=>{
        setFrom(roundFunc(data.data[selectFrom]*to));
      });
  }  

  const onSelectFromHandler = (e) => {
    setSelectFrom(e.target.value);
    setIsTo(true);
  }

  const onSelectToHandler = (e) => {
    setSelectTo(e.target.value);
    setIsFrom(true);
  }

  const onFromHandler = (e) => {
    setFrom(e.target.value);
    setIsFrom(true);
  }

  const onToHandler = (e) => {
    setTo(e.target.value);
    setIsTo(true);
  }

  if(isFrom) {
    convertationFrom();
    setIsFrom(false);
  } else if (isTo) {
    convertationTo();
    setIsTo(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Currency-block">

          <div style={{paddingBottom: "40pt"}}>
            <span>USD: {usdInfo}</span>
            <span> || </span>
            <span>EUR: {eurInfo}</span>
          </div>

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
