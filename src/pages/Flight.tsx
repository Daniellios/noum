import React from "react";
import { useParams } from "react-router-dom";

const Flight = () => {
  const params = useParams();

  const { id } = params;
  return (
    <div>
      <h1>Полет №</h1> {id}
    </div>
  );
};

export default Flight;
