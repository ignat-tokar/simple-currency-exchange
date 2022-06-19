import axios from "axios";
import { roundFunc } from "./utitlities";

export const getStartInfo = (setEurInfo, setUsdInfo) => {
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

export const convert = (selectFrom, selectTo, amount, setState, setIs) => {
  axios
    .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectFrom}/${selectTo}.json`)
    .then(data => {
      setState(roundFunc(data.data[selectTo] * amount));
      setIs(false);
    });
}