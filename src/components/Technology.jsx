import { use } from "react";
import toast from "react-hot-toast";
import Techcard from "./Techcard";
import TechnologyHeading from "./TechnologyHeading";
import YourStack from "./YourStack";

const Technology = ({ dataPromise, addstack, setaddstack }) => {
  const data = use(dataPromise);

  const hanslebutton = (item) => {
    const alreadyAdded = addstack.some(
      (tech) => tech.id === item.id
    );

    if (alreadyAdded) return;

    setaddstack((previousStack) => [...previousStack, item]);

    toast.success("Added to Stack!");
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <TechnologyHeading />

      <div className="grid grid-cols-4 items-start gap-4">
        <div className="col-span-3 grid grid-cols-3 gap-6">
          {data.map((item) => (
            <Techcard
              key={item.id}
              tachnology={item}
              addstack={addstack}
              hanslebutton={hanslebutton}
            />
          ))}
        </div>

        <div>
          <YourStack
            addstack={addstack}
            setaddstack={setaddstack}
          />
        </div>
      </div>
    </section>
  );
};

export default Technology;