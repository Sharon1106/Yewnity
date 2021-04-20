import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "./Signup";
import "./SignUpLogin.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SignUpLogin() {
  const [show, setShow] = useState(false);
  const [signup, setSignUp] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showlogin = () => setSignUp(false);
  const showsignup= () => setSignUp(true);

  useEffect(()=> {
    console.log(signup)
  }, [signup])

 

  const [users, setUsers] = useState([])
  const [formObject, setFormObject] = useState({})
  useEffect(() => {
    loadUsers()
  }, [])
  
  function loadUsers() {
    API.getUsers()
      .then(res => 
        setUsers(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}> SignUp </Button>
        <Modal show={show} onHide={handleClose}>
          {/* <Modal.Header 
          closeButton>
          </Modal.Header>   */}
            <Modal.Body>
              {!signup ? (<Login/>):(<SignUp/>)} {signup ? (<Button onClick={showlogin}>Login</Button>): (<Button onClick={showsignup}>Signup</Button>)}
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