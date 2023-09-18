import { useEffect, useState } from "react";
import "./styles.css";
import Beer from "./Components/Beer";
import Pagination from "./Components/Pagination";

export default function App() {
  const url = "https://api.punkapi.com/v2/beers";
  const perpage = 10;
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const getBeer = async () => {
    let res = await fetch(`${url}?page=${page}&per_page=${perpage}`);
    res = await res.json();
    setBeers(res);
  };

  useEffect(() => {
    getBeer();
  }, [page]);
  console.log(page);
  console.log(beers);
  return (
    <div className="App">
      <h1>Beer Shops</h1>
      <h2>Drink beer and save water!</h2>
      <h3>{page}</h3>
      <div>
        {beers.map((el, i) => {
          return <Beer key={i} {...el} />;
        })}
      </div>
      <div className="pagination">
        <Pagination
          page={page}
          numberofPage={5}
          onClickFn={(i) => setPage(i)}
        />
      </div>
    </div>
  );
}
