import data from "./data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">Shopino</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => {
            return (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <p>{product.name}</p>
                  <p><strong>{product.price}</strong></p>
                  <button>Add to cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
