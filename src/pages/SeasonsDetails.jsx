import { useParams } from "react-router-dom";

function SeasonsDetails() {
  const { season } = useParams();

  return (
    <div>
      <h2>Season {season}</h2>
    </div>
  );
}

export default SeasonsDetails;
