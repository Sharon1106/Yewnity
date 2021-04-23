import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CreateEvent from "./CreateEvent";
import DisplayEvents from "./DisplayEvents";

function EventModal() {
    const [show, setShow] = useState(false);
    const [createEvent, setEvent] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const showlogin = () => setSignUp(false);
    // const showsignup = () => setSignUp(true);

    useEffect(() => {
        console.log(createEvent)
    }, [createEvent])

    return (
        <>
            <Button className="button text-center" variant="primary" onClick={handleShow}>Create Event</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header
                    closeButton>
                </Modal.Header>
                <Modal.Body >
                    <CreateEvent />
                    <DisplayEvents />
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

export default EventModal;