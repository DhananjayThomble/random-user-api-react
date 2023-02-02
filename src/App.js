import { useEffect, useState } from "react";
import { Container,Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import axios from "axios";

function App() {

  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const {data} = await axios.get("https://randomuser.me/api/");
    setDetails(data.results[0]);
    console.log(details);
  }

  useEffect( ()=> {
    fetchDetails();
  },[] );

  return (
    <div className="App">

    </div>
  );
}

export default App;
