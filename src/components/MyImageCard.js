import { Card } from "react-bootstrap";

function MyImageCard({ details }) {

  const country = details.location?.country;
  console.log(country);
  const flagUrl = `https://countryflagsapi.com/png/${country}`;
   
  return (
    <Card>
      <Card.Body className="text-center">
        <img crossOrigin="anonymous" src={flagUrl} alt="" />
      </Card.Body>
    </Card>
  );
}

export default MyImageCard;
