import { useEffect, useState } from "react";
import CardData from './components/Card';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [starData, setStarData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://swapi.dev/api/starships/");
      const data = await res.json();
      console.log(data)
      //I didn't map over the results in the component!!
      // I don't understand why... but it's working
      setStarData(data.results)
    };
    fetchData()
  }, [])

  return (
    <div className="App">
      <CardData starData={starData}/>
    </div>
  );
}

export default App;
