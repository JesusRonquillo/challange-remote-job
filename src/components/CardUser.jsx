// email, gender, country-city
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Styles/CardUserStyle.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CardUser = ({ user }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userName = useSelector((state) => state.userName);
  return (
    <div className="carduser">
      <article className="card">
        <div className="head">
          <div className="circle"></div>
          <div className="img">
            <img src={user?.picture.large} alt="Img" className="imagen" />
          </div>
        </div>
        <div className="description">
          <h1>{userName}</h1>
          <h2 className="name">{`${user?.name.title} ${user?.name.first} ${user?.name.last}`}</h2>
          {/* <h3 className="gender">{`Gender: ${user?.gender}`}</h3>
          <h3 className="email">{`Email: ${user?.email}`}</h3>
          <h3 className="country">{`Country: ${user?.location.country}`}</h3>
          <h3 className="city">{`City: ${user?.location.city}`}</h3>
          <h3 className="street">{`Street: ${user?.location.street.name} ${user?.location.street.number}`}</h3> */}
        </div>
        <div className="contact">
          <Button className="btn" onClick={handleShow}>
            Contact
          </Button>

          <Modal className="btn-modal" show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title className="header-modal">Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                <li>{`Gender: ${user?.gender}`}</li>
                <li>{`Email: ${user?.email}`}</li>
                <li>{`Country: ${user?.location.country}`}</li>
                <li>{`City: ${user?.location.city}`}</li>
                <li>{`Street: ${user?.location.street.name} ${user?.location.street.number}`}</li>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="btn-close"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </article>
    </div>
  );
};

export default CardUser;
