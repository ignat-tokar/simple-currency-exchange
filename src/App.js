import './App.css';
import { useEffect, useState } from 'react';
import CurrencyBlock from './components/CurrencyBlock';
import { handlerWrapper } from './components/utitlities';
import Header from './components/Header';
import { convert, getStartInfo } from './components/api';

function App() {

  const [selectFrom, setSelectFrom] = useState('usd');
  const [selectTo, setSelectTo] = useState('uah');
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [isFrom, setIsFrom] = useState(false);
  const [isTo, setIsTo] = useState(false);

  const [usdInfo, setUsdInfo] = useState(0);
  const [eurInfo, setEurInfo] = useState(0);

  useEffect(() => getStartInfo(setEurInfo, setUsdInfo), []);

  const onSelectFromHandler = (e) => handlerWrapper(e, setSelectFrom, setIsTo);
  const onSelectToHandler = (e) => handlerWrapper(e, setSelectTo, setIsFrom);
  const onFromHandler = (e) => handlerWrapper(e, setFrom, setIsFrom);
  const onToHandler = (e) => handlerWrapper(e, setTo, setIsTo);
  
  if (isFrom) convert(selectFrom, selectTo, from, setTo, setIsFrom);
  if (isTo) convert(selectTo, selectFrom, to, setFrom, setIsTo);

  return (
    <div className="App">
      <Header 
        usdInfo={usdInfo}
        eurInfo={eurInfo}
      />
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
