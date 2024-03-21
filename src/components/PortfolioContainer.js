import React from "react";

function PortfolioContainer({setPortfolio, portfolio}) {

  const sellStock = (stock) => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.filter((item) => item.id !== stock.id)
    );
  };

  console.log(portfolio)
  return (
  <div>
  <h2>My Portfolio</h2>    
      {portfolio.map((stock) => (
      <div  key={stock.id} onClick={() => sellStock(stock)}>
          <h5 className="card-title">{stock.name}</h5>
          <h6 className="card-text">{stock.ticker}</h6>
          <p className="card-text">{stock.type}</p>
          <p className="card-text">{stock.price}</p>
      </div>
      ))}
    </div>
  );
}

export default PortfolioContainer;
