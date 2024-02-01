import Card from "react-bootstrap/Card";
import Nav from "./Nav";

function CardData({ starData }) {
  return (
    <div>
      <Nav />
      <div className="card-components">
        {starData.map((star) => {
          return (
            <Card style={{ width: "18rem"}}>
              <Card.Body style={{backgroundColor: "#354f52", border: "2px solid black", borderRadius: "5px", height: "120px", }}>
                <Card.Title>{star.name}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default CardData;
