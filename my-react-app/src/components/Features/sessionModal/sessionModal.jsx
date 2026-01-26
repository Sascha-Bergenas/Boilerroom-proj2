import BaseCard from "../../ui/cards/Card";
import WorkSessionForm from "../../ui/form/WorkSessionForm";
import Modal from "../../ui/modal/Modal";

function SessionModal({ dialogRef, handleCloseModal }) {
  return (
    <>
      <Modal dialogRef={dialogRef}>
        <h3>Logga din session</h3>
        <WorkSessionForm handleCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
}
export default SessionModal;
