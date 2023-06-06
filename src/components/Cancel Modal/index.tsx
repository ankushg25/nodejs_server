import { MouseEventHandler, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

type CancelProps = {
    show: boolean,
    title: string,
    text: string,
    cancelLabel: string,
    commitLabel: string,
    handleCancel: MouseEventHandler
    handleClose: MouseEventHandler
}

export default function CancelModal(props: CancelProps) {
    const [disableModal, setDisableModal] = useState(false);

    return (
        <Modal show={props.show} centered={true}>
            <Modal.Header>
                <span>{props.title}</span>
                <button className="btn-close" type="button" onClick={props.handleClose}></button>
            </Modal.Header>
            <Modal.Body>{props.text}</Modal.Body>
            <Modal.Footer className="justify-content-between p-2">
                <Form.Check type="checkbox" id="default-checkbox" label="Don't Show Again" checked={disableModal} onChange={() => { setDisableModal(!disableModal) }} />
                <div className="m-0">
                    <Button variant="secondary" className="rounded-1 me-1 px-4" onClick={props.handleClose}>{props.cancelLabel}</Button>
                    <Button variant="primary" className="rounded-1 ms-1 px-4" onClick={props.handleCancel}>{props.commitLabel}</Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}