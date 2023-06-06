import { useState } from "react";
import { Button } from "react-bootstrap";
import CancelModal from "../Cancel Modal";
import styles from "./createProject.module.css";
import { CREATE_PROJECT_DATA } from "@/helpers/static_data";
import RadioAndCheckbox from "../Create FormItem/radio_checkbox";

export default function Wizard() {
    const handleCancel = () => { setShowCancelModal(true) }
    const handleDismissModal = () => { setShowCancelModal(false) }
    const handleNext = () => { setShowCancelModal(true) }
    const [showCancelModal, setShowCancelModal] = useState(false);

    const [formData, setFormData] = useState({})

    const onFormUpdate = (key: string, value: string): void => {
        setFormData({ ...formData, [key]: [value] })
    }
    return (
        <div className="d-flex justify-content-evenly bg-light border-top p-3">
            <div className="w-25 border-end px-3">
                <div className="py-2 mx-3 border-top border-bottom fw-bold">Summary</div>
                <ul className={`${styles.progress_bar} py-3`}>
                    {
                        CREATE_PROJECT_DATA.map((item, idx) => {
                            const key = `${item.title}-${idx}`
                            return (<li className={`${styles.progress_bar_item}`}>
                                {item.title}
                            </li>)
                        })
                    }
                </ul>
            </div>
            <div className="w-50 px-3 border-end">
                <div>
                    {
                        CREATE_PROJECT_DATA.slice(0, 2).map((item, idx) => {
                            return (<div className="border-bottom p-2">
                                <h4 className="py-2"><span className="text-success">{idx + 1}.</span> {item.title}</h4>
                                <div className="lh-base fs-6">{item.body}</div>
                                <RadioAndCheckbox key={`${item.title}-${idx}`} type={item.type} values={item.values} checked={onFormUpdate} />
                            </div>)
                        })
                    }
                </div>
                <div className="d-flex justify-content-end p-3">
                    <Button onClick={handleCancel} variant="outline-primary" className="mx-2">Cancel</Button>
                    <Button onClick={handleNext} className="mx-2 px-4" >Next</Button>
                    <CancelModal
                        show={showCancelModal}
                        handleCancel={handleCancel}
                        title="Leave Create Project"
                        text="Are you sure ?"
                        commitLabel="Leave"
                        cancelLabel="Cancel"
                        handleClose={handleDismissModal}
                    />
                </div>

            </div>
            <div className="w-25"></div>
        </div>
    )
}