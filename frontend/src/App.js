import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header className="App-header">
        <a href="/">Shopino</a>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products/:slug" element={<Product />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
