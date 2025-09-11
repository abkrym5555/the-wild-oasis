import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Button onClick={() => setShowForm((showForm) => !showForm)}>
        add new cabin
      </Button>
      {showForm && <CreateCabinForm />}
    </>
  );
}

export default AddCabin;
