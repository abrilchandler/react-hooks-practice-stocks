import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, setPortfolio, portfolio, setStocks, setSortBy, setFilter}) {

  // we passed setPortfolio and portfolio here - portfolio below is doing what prevPortfolio was trying to do.

  const buyStock = (stock) => {
    setPortfolio([...portfolio, stock])
  }

  const sortStocks = (type) => {
    let sortedStocks = [...stocks];

    if (type === 'ticker') {
      sortedStocks.sort((a, b) => a.ticker.localeCompare(b.ticker));
    } else if (type === 'price') {
      sortedStocks.sort((a, b) => a.price - b.price);
    }

    setStocks(sortedStocks);
    setSortBy(type);
  };
 

  return (
    <div>
      <h2>Stocks</h2>
      <div>
           <button onClick={() => setFilter('all')}>All</button>
           <button onClick={() => setFilter('Tech')}>Tech</button>
           <button onClick={() => setFilter('Finance')}>Finance</button>
      </div>
      <div>
           <button onClick={() => sortStocks('ticker')}>Sort by Ticker</button>
           <button onClick={() => sortStocks('price')}>Sort by Price</button>
         </div>
      {/* <Stock />  this is doing nothing so I commented it out */}
      <div className="card">
        {stocks.map((stock) => (
        <div className="card-body" key={stock.id} onClick={() => buyStock(stock)}>
          <h5 className="card-title">{stock.name}</h5>
          <h6 className="card-text">{stock.ticker}</h6>
          <p className="card-text">{stock.type}</p>
          <p className="card-text">{stock.price}</p>
        </div>
        ))}
      </div>
      
    </div>
  );
}

export default StockContainer;
