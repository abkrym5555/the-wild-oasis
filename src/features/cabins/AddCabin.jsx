import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [isOpenModel, setisOpenModel] = useState(false);
  return (
    <div>
      <Button onClick={() => setisOpenModel((isOpenModel) => !isOpenModel)}>
        add new cabin
      </Button>
      {isOpenModel && (
        <Modal onClose={() => setisOpenModel(false)}>
          <CreateCabinForm onClose={() => setisOpenModel(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
