import React, { useState } from "react";
import { Container,Row,Col,Button,Form,Dropdown,Card , Toast,ToastContainer} from "react-bootstrap";

function Support(){

    const [showToast,setShowToast] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setShowToast(true)
    }

  return (
    <Container className="py-5 position-relative" >
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
        <Card className="shadow-lg rounded-4">
        <Card.Body>
            <h3 className="mb-4 text-center text-primary">Support Center</h3>
            <Dropdown className="mb-4">
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                    How can we help you?
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                    I found Incorrect/outdated information on the page
                    </Dropdown.Item>
                     <Dropdown.Item href="#/action-2">
                    There is a photo/review I would like to report
                     </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Full name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required/>
                </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your Phone Number"  required/>
                </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={4}  placeholder="Describe your thoughts" />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="primary" type="submit">
                        Submit Response
                    </Button>
                </div>
            </Form>
        </Card.Body>
        </Card>
        </Col>
      </Row>


      {/* TOAST DISPLY */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
        onClose={()=>setShowToast(false)}
        show={showToast}
        delay={5000}
        autohide
        bg="success"
        >
        <Toast.Header>
            <strong className="me-auto">Support</strong>
            <small>Just Now</small>
        </Toast.Header>
        <Toast.Body className="text-white">Your Request has been submitted sucessfully</Toast.Body>
      </Toast>
      </ToastContainer>
    </Container>
  );
}
  export default Support
