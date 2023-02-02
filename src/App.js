import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import MyCard from "./components/MyCard";
import MyImageCard from "./components/MyImageCard";

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    setDetails(data.results[0]);  
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container fluid className="p-4  bg-info App">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <MyCard details={details} />
        </Col>
        <Col md="auto">
          <MyImageCard details={details} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
