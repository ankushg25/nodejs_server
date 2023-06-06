import { useState } from "react";
import { Button } from "react-bootstrap";
import PopupModal from "../Cancel Modal";
import styles from "./create-project.module.scss";
import { CREATE_PROJECT_DATA } from "@/helpers/static_data";
import RadioAndCheckbox from "../Create FormItem/radio_checkbox";

export default function Wizard(): JSX.Element {
  const handleNext = () => {};
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [disableModal, setDisableModal] = useState(false);

  const handleDismissModal = (disableModal: boolean) => {
    setDisableModal(disableModal);
    setShowCancelModal(false);
  };
  const handleCancel = (disableModal: boolean) => {
    setDisableModal(disableModal);
    setShowCancelModal(true);
    // TODO route to home page
  };

  // This handles all the data form the child form elements
  const [formData, setFormData] = useState({});

  // TODO dummy fuction to handle the form updates from the Form Components.
  const onFormUpdate = (key: string, value: string): void => {
    setFormData({ ...formData, [key]: [value] });
  };

  return (
    <div className="d-flex justify-content-evenly bg-light border-top p-3">
      <div className="w-25 border-end px-3">
        <div className="py-2 mx-3 border-top border-bottom fw-bold">
          Summary
        </div>
        <ul className={`${styles.progress_bar} py-3`}>
          {CREATE_PROJECT_DATA.map((item, idx) => {
            const key = `${item.title}-${idx}`;
            /**
             * add .current for Current Element
             * add .is_done for completed element
             * This to be done based on Form Completion.
             */
            return (
              <li key={key} className={`${styles.progress_bar_item}`}>
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-50 px-3 border-end">
        <div>
          {
            /**
             * Using a slice of dataset for UX review purposes only.
             * This will be replaced with the actual data call.
             * TODO Need to confirm the criteria for DONE, CURRENT status
             */
            CREATE_PROJECT_DATA.slice(0, 2).map((item, idx) => {
              const key = `${item.title}-${idx}`;
              return (
                <div className="border-bottom p-2" key={item.title}>
                  <h4 className="py-2">
                    <span className="text-success">{idx + 1}.</span>{" "}
                    {item.title}
                  </h4>
                  <div className="lh-base fs-6">{item.body}</div>
                  <RadioAndCheckbox
                    id={key}
                    type={item.type}
                    values={item.values}
                    checked={onFormUpdate}
                  />
                </div>
              );
            })
          }
        </div>
        <div className="d-flex justify-content-end p-3">
          <Button
            onClick={() => handleCancel(disableModal)}
            variant="outline-primary"
            className="mx-2"
          >
            Cancel
          </Button>
          <Button onClick={handleNext} className="mx-2 px-4">
            Next
          </Button>
          <PopupModal
            show={!disableModal && showCancelModal}
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
  );
}
