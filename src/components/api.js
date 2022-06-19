import axios from "axios";
import { roundFunc } from "./utitlities";

export const getStartInfo = (setEurInfo, setUsdInfo) => {
  setStartInfo('eur', setEurInfo);
  setStartInfo('usd', setUsdInfo);
}

export const convert = (selectFrom, selectTo, amount, setState, setIs) => {
  axios
    .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectFrom}/${selectTo}.json`)
    .then(data => {
      setState(roundFunc(data.data[selectTo] * amount));
      setIs(false);
    });
}

const setStartInfo = (currency, setState) => {
  axios
    .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}/uah.json`)
    .then(data => {
      setState(roundFunc(data.data.uah));
    });  
}