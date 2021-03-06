import React, { useState, useEffect } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SignUpLogin() {
  const [show, setShow] = useState(false);
  const [signup, setSignUp] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showlogin = () => setSignUp(false);
  const showsignup = () => setSignUp(true);

  useEffect(() => {
  }, [signup])

  return (
    <>
      <Button className="button text-center" variant="primary" onClick={handleShow}> Signup </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton>
        </Modal.Header>
        <Modal.Body >
          {!signup ? (<Login />) : (<SignUp />)}
          {signup ? (<Button className="button text-center" onClick={showlogin}>LOGIN</Button>) : (<Button onClick={showsignup}>SIGNUP</Button>)}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary" onClick={handleClose}>Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUpLogin;