import React, { useState } from "react";
import './Calendar.css';
import Calendars from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, Modal, Button, Form } from "react-bootstrap";


function Calendar(){

    const navigate = useNavigate();

    function handleClick(){
        navigate("/");
      };

    const [value, setValue] = useState(new Date());

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () =>{
        setShowModal(true);
    } 

    return(

        <>

        <Navbar className="nav"  variant="dark">
            <Container style={{width: "100%"}}>
                <Navbar.Brand href="">Doc&Vous</Navbar.Brand>
                <Nav className="ms-auto header">
                    <Nav.Link href="">Rendez-vous</Nav.Link>
                    <Nav.Link href="">Clients</Nav.Link>
                    <Nav.Link href="">A Faire</Nav.Link>
                    
                        
                    <Nav.Item onClick={handleClick} id="btn1" className="ms-auto"><Nav.Link>Deconnexion</Nav.Link></Nav.Item>
                </Nav>
            </Container>
        </Navbar>

        <div className="globalDiv">
            
            <div className="secondDiv">
                <div className="leftBar">
                    <h3>Liste des Rendez-vous</h3>
                </div>
                <Calendars value={ value } onChange={setValue} onClickDay={handleShow} className="Calendar" />
                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <input type="text" PlaceHolder=""/>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
            </div>
            
        </div>
        
        </>
    )

}

export default Calendar;