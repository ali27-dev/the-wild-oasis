import { useState } from "react";
import Button from "../../ui/Button";
import Model from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [iOpenModel, setIsOpenModel] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModel(!iOpenModel)}>Add new cabin</Button>
      {iOpenModel && (
        <Model onClose={() => setIsOpenModel(false)}>
          <CreateCabinForm onCloseModel={() => setIsOpenModel(false)} />
        </Model>
      )}
    </div>
  );
}

export default AddCabin;
