import { SIDEBAR_MENU_ITEMS } from "@/helpers/static_data";
import { useState } from "react";
import { Col, Image, ListGroupItem } from "react-bootstrap";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  const handleShow = () => {
    setShow(!show);
  };
  const [show, setShow] = useState(false);

  return (
    <Col xs="auto" className="bg-dark sticky-top border-end">
      <div className="d-flex flex-sm-colum flex-row flex-nowrap align-items-center">
        <ul className="nav nav-pill nav-flush flex-sm-column flex-nowrap mb-sm-auto align-items-start">
          <ListGroupItem as="li" key="#">
            <a href="/" className="d-flex nav-link text-truncate py-3 px-0 align-items-center">
              <Image src="logo.svg" className="fs-3 px-2" width="48px"></Image>
            </a>
          </ListGroupItem>
          <ListGroupItem as="li" key="home">
            <a className="d-flex nav-link text-truncate py-0 px-0 align-items-center" onClick={handleShow}>
              <i className="bi-chevron-double-right fs-4 px-2"></i>
              <span className={`${show ? styles.show : ""} ${styles.label} ms-1`}>Hide</span>
            </a>
          </ListGroupItem>
          {Object.keys(SIDEBAR_MENU_ITEMS).map((item) => {
            return (
              <ListGroupItem as="li" key={item}>
                <a href={`/${item}`}
                  className="d-flex nav-link text-truncate py-2 px-0 align-items-center"
                >
                  <i className={`${SIDEBAR_MENU_ITEMS[item].icon} fs-3 px-2`}></i>
                  <span className={`${show ? styles.show : ""} ${styles.label} ms-1`}>
                    {SIDEBAR_MENU_ITEMS[item].label}
                  </span>
                </a>
              </ListGroupItem>
            );
          })}
        </ul>
      </div>
    </Col>
  );
};

export default Sidebar;
