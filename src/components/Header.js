function Header({ usdInfo, eurInfo }) {
  return (
    <header>
      <div className="Info-wrapper">
        <span>USD: {usdInfo}</span>
        <span>EUR: {eurInfo}</span>
      </div>
    </header>
  );
}

export default Header;