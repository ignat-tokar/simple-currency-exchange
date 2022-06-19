function Header({ usdInfo, eurInfo }) {
  return (
    <header>
      <div className="Info-wrapper">
        <span>USD: {usdInfo}</span>
        <span>EUR: {eurInfo}</span>
      </div>
      <a href="https://github.com/ignat-tokar/simple-currency-exchange">Browse code</a>
    </header>
  );
}

export default Header;