import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

// function AddCabins() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Row>
//         <CabinTable />
//         <Button onClick={() => setIsOpenModal((show) => !show)}>
//           Add new cabin
//         </Button>
//         {isOpenModal && (
//           <Modal onCloseModal={() => setIsOpenModal(false)}>
//             <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//           </Modal>
//         )}
//       </Row>
//     </div>
//   );
// }

function AddCabins() {
  return (
    <Modal>
      <div>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </div>
    </Modal>
  );
}

export default AddCabins;
