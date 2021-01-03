import axios from 'axios';
import React,{useState,useEffect} from 'react';
import './App.css';
import Coin from './Coin';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Kontakt from './Kontakt';
import Onas from './Onas';

function App() {
const[coins,setCoins]=useState([]);
const[search,setSearch]=useState('')
 
  useEffect(()=>{
 axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=czk&order=market_cap_desc&per_page=100&page=1&sparkline=false")
.then(res=>{
setCoins(res.data);
console.log(res.data)

}).catch(error=>{
  console.log(error)
})
  },[]);

  const handleChange=e=>{
    setSearch(e.target.value)
  }

  const filteredCoins=coins.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
 
 
 
 return (
    <Router>
      <Switch>
    <Route exact path="/">
    <div className="app">
    <div className="coin-app">
      <Navbar/>
    <div className="coin-search">
<h1 className="coin-text">Hledej měnu</h1>
<form >
  <input type="text" placeholder="zadej měnu"className="coin-input" onChange={handleChange}/>
</form>

    </div>

  
{filteredCoins.map(coin=>{
  return(
    <Coin key={coin.id} name={coin.name} image={coin.image} 
    symbol={coin.symbol} marketcap={coin.market_cap}
    price={coin.current_price}
    priceChange={coin.price_change_percentage_24h}
    volume={coin.total_volume}
    />
  );
})}
    </div>
    </div>
    </Route>
    <Route path="/Kontakt">
<Kontakt/>
    </Route>
    <Route path="/Onas">
<Onas/>
    </Route>
    </Switch>
    </Router>
  );
}

export default App;
