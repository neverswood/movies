import { useState, useEffect } from 'react';
import './App.scss';
import { Home } from './page/Home';
import Header from './components/Header';
import { getMovie } from './services/Movies';
import { Movie } from './services/models/MovieDataModel';

function App() {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    getMovie().then((response) => setData(response));
  }, []);

  return (
    <div className="App">
      <Header />
      <Home data={data} />
    </div>
  );
}

export default App;
