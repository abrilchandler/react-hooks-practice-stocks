import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortBy, setSortBy] = useState(null)
  const [filter, setFilter] = useState(null)


  const filterStocks = (stocks) => { 
    if (filter === "all" || !filter) { // if no button has been clicked or all has been clicked
      setStocks(stocks) // setStocks to all stocks
    } else { // if there's a filter selected - then we run your filter (I copied from the one you wrote!)
      const filtered = stocks.filter((stock) => stock.type === filter)
      setStocks(filtered) // and then we setStocks to filtered list
    }
  };

  let filteredStocks = stocks;
  if (filter) {
    filteredStocks = stocks.filter((stock) => stock.type === filter);
  }


  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
    .then((r) => r.json())
    .then((stocks) => filterStocks(stocks)) // ok so instead of calling setStocks here we're going to call filterStocks - and then filterStocks will call setStocks
  }, [filter]) 

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer setFilter={setFilter} filter={filter} stocks={stocks} setPortfolio={setPortfolio} portfolio={portfolio} sortBy={sortBy} setSortBy={setSortBy} setStocks={setStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} setPortfolio={setPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
