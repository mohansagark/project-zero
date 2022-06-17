import { Modal } from "react-bootstrap";
import Button from "../../Button";

const ConditionalModal = ({ handleClose, show, headerBody, headerTitle }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      animation={false}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{headerTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{headerBody}</Modal.Body>
      <Modal.Footer>
        <Button title="Close" onClick={handleClose} />
        <Button title="Save Changes" onClick={handleClose} />
      </Modal.Footer>
    </Modal>
  );
};

export default ConditionalModal;
