import { use } from "react";
import Techcard from "./Techcard";

const Technology = ({ dataPromise }) => {
  const data = use(dataPromise);

  console.log("Technology Data:", data);

  return (
    <div>
      {data.map((item) => (
        <Techcard key={item.id} tachnology={item} />
      ))}
    </div>
  );
};

export default Technology;
