import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface CancelProps {
  show: boolean;
  title: string;
  text: string;
  cancelLabel: string;
  commitLabel: string;
  handleCancel: Function;
  handleClose: Function;
}

export default function PopupModal({
  show = false,
  title,
  text,
  cancelLabel = "Cancel",
  commitLabel,
  handleCancel,
  handleClose,
}: CancelProps): JSX.Element {
  const [disableModal, setDisableModal] = useState(false);

  return (
    <Modal show={show} centered={true}>
      <Modal.Header>
        <span>{title}</span>
        <button
          className="btn-close"
          type="button"
          onClick={() => handleClose(disableModal)}
        ></button>
      </Modal.Header>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer className="justify-content-between p-2">
        <Form.Check
          type="checkbox"
          id="default-checkbox"
          label="Don't Show Again"
          checked={disableModal}
          onChange={() => {
            setDisableModal(!disableModal);
          }}
        />
        <div className="m-0">
          <Button
            variant="secondary"
            className="rounded-1 me-1 px-4"
            onClick={() => handleClose(disableModal)}
          >
            {cancelLabel}
          </Button>
          <Button
            variant="primary"
            className="rounded-1 ms-1 px-4"
            onClick={() => handleCancel(disableModal)}
          >
            {commitLabel}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
