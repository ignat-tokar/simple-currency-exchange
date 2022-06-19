function Header({ usdInfo, eurInfo }) {
  return (
    <header>
      <span>USD: {usdInfo}</span>
      <span>EUR: {eurInfo}</span>
    </header>
  );
}

export default Header;