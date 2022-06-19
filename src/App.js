import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CurrencyBlock from './components/CurrencyBlock';
import { roundFunc } from './components/utitlities';

function App() {

  const [selectFrom, setSelectFrom] = useState('usd');
  const [selectTo, setSelectTo] = useState('uah');

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  const [isFrom, setIsFrom] = useState(false);
  const [isTo, setIsTo] = useState(false);

  const [usdInfo, setUsdInfo] = useState(0);
  const [eurInfo, setEurInfo] = useState(0);

  useEffect(() => getStartInfo(), []);

  const getStartInfo = () => {
    axios
      .get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/uah.json')
      .then(data => {
        setEurInfo(roundFunc(data.data.uah));
      });
    axios
      .get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/uah.json')
      .then(data => {
        setUsdInfo(roundFunc(data.data.uah));
      })
  }

  const convertationFrom = () => {
    axios
      .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectFrom}/${selectTo}.json`)
      .then(data => {
        setTo(roundFunc(data.data[selectTo] * from));
      });
  }

  const convertationTo = () => {
    axios
      .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectTo}/${selectFrom}.json`)
      .then(data => {
        setFrom(roundFunc(data.data[selectFrom] * to));
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

  if (isFrom) {
    convertationFrom();
    setIsFrom(false);
  } else if (isTo) {
    convertationTo();
    setIsTo(false);
  }

  return (
    <div className="App">
      <header>
        <span>USD: {usdInfo}</span>
        <span> || </span>
        <span>EUR: {eurInfo}</span>
      </header>
      <div className="Currency-wrapper">
        <CurrencyBlock
          selectValue={selectFrom}
          onSelectHandler={onSelectFromHandler}
          inputValue={from}
          onInputHandler={onFromHandler}
        />
        <CurrencyBlock
          selectValue={selectTo}
          onSelectHandler={onSelectToHandler}
          inputValue={to}
          onInputHandler={onToHandler}
        />
      </div>
    </div>
  );
}

export default App;
