import data from "./data.json";
import { Link } from "react-router-dom";
export default function Adoption() {
  const dogInfo = data.map((doggie) => {
    return (
      <div key={doggie.id} className="dog-list">
        <img alt={doggie.Breed} src={doggie.image} width={500} />
        <h3>
          <Link to={`/adoption/${doggie.id}`} state={doggie}>
            <em>Breed: </em>
            {doggie.Breed}
          </Link>
        </h3>
        <h3>
          {" "}
          <em>Dog Description:</em> {doggie.description}{" "}
        </h3>
        <h3>
          {" "}
          <em> Color: </em> {doggie.Color}{" "}
        </h3>
        <h3>
          {" "}
          <em>Rescued From:</em> {doggie["Rescued From"]}{" "}
        </h3>
        <h3>
          {" "}
          <em> Life Expectancy: </em> {doggie["Life Expectancy"]}{" "}
        </h3>
        <h3>
          {" "}
          <em> Approx Age: </em> {doggie["Approx Age"]}{" "}
        </h3>
      </div>
    );
  });
  return <div className="dog-container">{dogInfo}</div>;
}
