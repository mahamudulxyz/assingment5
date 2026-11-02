import { use } from "react";
import Techcard from "./Techcard";
import TechnologyHeading from "./TechnologyHeading";

const Technology = ({ dataPromise }) => {
  const data = use(dataPromise);

  console.log("Technology Data:", data);

  return (
    <>
      <TechnologyHeading />
    <div  className="grid grid-cols-3 gap-3">
      
      {data.map((item) => (
        <Techcard key={item.id} tachnology={item} />
      ))}
    </div>
    </>
  );
};

export default Technology;
