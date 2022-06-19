export const roundFunc = (num) => {
  return Math.round(num * 100) / 100;
}

export const handlerWrapper = (e, setState, setIs) => {
  setState(e.target.value);
  setIs(true);
}