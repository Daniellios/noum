import { useParams } from "react-router-dom";

const Flight: React.FC = () => {
  const params = useParams();

  const { id } = params;
  return (
    <div>
      <h1>Полет №</h1> {id}
    </div>
  );
};

export default Flight;
