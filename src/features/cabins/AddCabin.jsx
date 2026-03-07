import { useState } from "react";
import Button from "../../ui/Button";
import Model from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <Model>
      <Model.Open opens="cabin-form">
        <Button>Add New Cabin</Button>
      </Model.Open>
      <Model.Window name="cabin-form">
        <CreateCabinForm />
      </Model.Window>

      <Model.Open opens="table">
        <Button>Show Table</Button>
      </Model.Open>
      <Model.Window name="table">
        <CabinTable />
      </Model.Window>
    </Model>
  );
}
// function AddCabin() {
//   const [iOpenModel, setIsOpenModel] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModel(!iOpenModel)}>Add new cabin</Button>
//       {iOpenModel && (
//         <Model onClose={() => setIsOpenModel(false)}>
//           <CreateCabinForm onCloseModel={() => setIsOpenModel(false)} />
//         </Model>
//       )}
//     </div>
//   );
// }

export default AddCabin;
