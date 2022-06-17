
import { Modal, Button
 } from "react-bootstrap";

const CustomModal = ({handleClose, show, innerCompoenent, headerTitle}) => {
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
        <Modal.Body>{innerCompoenent()}</Modal.Body>
      </Modal>
    );
}

export default CustomModal;