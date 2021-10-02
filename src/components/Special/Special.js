import { useContext } from "react";
import { RingContext } from "../../App";

const Special = () => {
  // 5th step useContext hooks uses , than app.js a jey name diya ase sei name tarpor const diya akta name declare korbo
  const [ornaments, house] = useContext(RingContext);

  return (
    <div>
      <h1>Special</h1>
      <small>House: {house} </small>
      <p>{ornaments} </p>
    </div>
  );
};

export default Special;
