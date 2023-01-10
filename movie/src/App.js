import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  // 비어있는 배열을 기본값으로 주어, 처음 새로고침되었을때(API 정보를 받아올때) 발생하는 오류를 방지함
  const [cost, setCost] = useState(1);
  const [need, setNeed] = useState(1);
  const onChange = (event) => {
    setCost(event.target.value);
    setNeed(1);
  };
  const handleInput = (event) => setNeed(event.target.value);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin) => (
            <option
              key={coin.id}
              value={coin.quotes.USD.price}
              id={coin.symbol}
              symbol={coin.symbol}
            >
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}

      <hr />
      <h2>Press coin 💰</h2>
      <div>
        <input
          type='number'
          value={need}
          onChange={handleInput}
          placeholder='dollor'
        ></input>
        <p>You can get {need / cost}</p>
      </div>
    </div>
  );
}

export default App;
