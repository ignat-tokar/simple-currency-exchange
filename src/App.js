import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from './key';

function App() {

  const [USD, setUSD] = useState(0);
  const [UAH, setUAH] = useState(0);
  const [EUR, setEUR] = useState(0);

  useEffect(()=>{
    getConvertResult("USD", "UAH", USD); 
    getConvertResult("USD", "EUR", USD); 
  }, [USD]);

  // useEffect(()=>{
  //   getConvertResult("UAH", "USD", UAH); 
  //   getConvertResult("UAH", "EUR", UAH); 
  // }, [UAH]);  

  // useEffect(()=>{
  //   getConvertResult("EUR", "USD", EUR); 
  //   getConvertResult("EUR", "UAH", EUR); 
  // }, [EUR]);   

  const getConvertResult = (from, to, amount) => {
    axios
      .get(`https://api.apilayer.com/currency_data/convert?from=${from}&to=${to}&amount=${amount}`, {
        headers: {
          'apikey': API_KEY
        }
      })
      .then(response => {
        switch (to) { 
          case "USD": 
            setUSD(response.data.result);
            break;
          case "UAH": 
            setUAH(response.data.result);
            break;       
          case "EUR": 
            setEUR(response.data.result);
            break;                  
          default:
            break;
        }
      })
  }

  const changeHandlerUAH = (e) => setUAH(e.target.value);
  const changeHandlerUSD = (e) => setUSD(e.target.value);
  const changeHandlerEUR = (e) => setEUR(e.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <h2>USD</h2>
        <input 
          type="number" 
          placeholder="USD"
          value={USD}
          onChange={changeHandlerUSD}
        />
        <h2>UAH</h2>
        <input 
          type="number" 
          placeholder="UAH"
          value={UAH}
          onChange={changeHandlerUAH}
        />
        <h2>EUR</h2>
        <input 
          type="number" 
          placeholder="EUR"
          value={EUR}
          onChange={changeHandlerEUR}
        />        
      </header>
    </div>
  );
}

export default App;
