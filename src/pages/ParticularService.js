import { useLocation } from "react-router-dom";
import PartServiceCard from "../components/PartServiceCard";

const ParticularService = ({ id }) => {
  const location = useLocation();

  // console.log(location.state.title);

  return (
    <>
      <div>
        <PartServiceCard
          id={location.state.id}
          title={location.state.title}
          description={location.state.description}
          image={location.state.image}
        />
      </div>
    </>
  );
};

export default ParticularService;
