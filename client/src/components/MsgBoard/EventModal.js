import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CreateEvent from "./CreateEvent";

function EventModal() {
    const [show, setShow] = useState(false);
    const [createEvent, setEvent] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
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