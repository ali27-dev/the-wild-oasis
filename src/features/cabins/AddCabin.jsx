import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <Modal>
      <div>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </div>
      {/* <Modal.Open opens="table">
        <Button>Show Table</Button>
      </Modal.Open>
      <Model.Window name="table">
        <CabinTable />
      </Model.Window> */}
    </Modal>
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
