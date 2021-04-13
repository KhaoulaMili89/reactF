import './App.css';
import {Navbar,Nav,Form,Col,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";



 function App() {
  return ( 
    <div className="App">
 
<Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">Tech Store</Navbar.Brand>
  <Nav className="mr-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
  </Nav>
</Navbar>

<Form>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    </Form.Row>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="20 Bassatine City 5020 Jemmel" />
  </Form.Group>

 

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        
          
 </div>    
   
    
     
   
  );
}

export default App; 

