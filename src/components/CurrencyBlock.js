function CurrencyBlock({ selectValue, onSelectHandler, inputValue, onInputHandler }) {
	return (
		<div className="Currency-block">
			<select
				name="to"
				value={selectValue}
				onChange={onSelectHandler}
			>
				<option value="usd">USD</option>
				<option value="uah">UAH</option>
				<option value="eur">EUR</option>
			</select>
			<input type="number" value={inputValue} onChange={onInputHandler} />
		</div>
	);
}

export default CurrencyBlock;
