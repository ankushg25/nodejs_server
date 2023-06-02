import { useState } from "react";
import { Button, ButtonGroup, ListGroup, ListGroupItem, ProgressBar } from "react-bootstrap";
import CancelModal from "../Cancel Modal";
import styles from "./createProject.module.css";

export default function Wizard() {
    const handleCancel = () => { setShowCancelModal(true) }
    const handleDismissModal = () => { setShowCancelModal(false) }
    const handleNext = () => { }
    const [showCancelModal, setShowCancelModal] = useState(true);
    const [dontShowModal, setDontShowModal] = useState(false);
    return (
        <div className="d-flex justify-content-evenly">
            <div className="w-25 bg-success border-end">
                <ul className={`${styles.progress_bar}`}>
                    <li className={`${styles.progress_bar_item}`}>Summary</li>
                    <li className={`${styles.progress_bar_item} ${styles.progress_bar_item.is_done}`}>
                        This is div 1
                    </li>
                </ul>
            </div>
            <div className="w-75 bg-primary">
                This is div 2
                <ButtonGroup>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleNext}>Next</Button>
                </ButtonGroup>
                <CancelModal
                    show={showCancelModal}
                    dontShow={dontShowModal}
                    handleCancel={handleCancel}
                    title="Leave Create Project"
                    text="Are you sure ?"
                    handleClose={handleDismissModal}
                />
            </div>
        </div>
    )
}