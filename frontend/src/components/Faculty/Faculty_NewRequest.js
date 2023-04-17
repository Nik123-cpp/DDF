import './Faculty_Styles/DDF_NewRequest.css'

import React from 'react'
import Faculty_Navbar from './Faculty_Navbar1'
import { Container, Row, Col, Form} from 'react-bootstrap';

function Faculty_NewRequest() {

    return (
      <div>
        <Faculty_Navbar />

        <Container className="reqform">
            <Form className="form-horizontal" action="">
                <Form.Group as={Row}>
                    <Form.Label htmlFor="reqtype" className="control-label col-sm-2">Request Type:</Form.Label>
                    <Col sm={10}>
                        <Form.Select id="reqtype">
                            <option>Public</option>
                            <option>Private</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label htmlFor="title" className="control-label col-sm-2">Title</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" id="title" placeholder="Enter Request Title" name="title" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label htmlFor="amount" className="control-label col-sm-2">Amount</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" id="amount" placeholder="Enter Request Amount" name="amount" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label htmlFor="docs" className="control-label col-sm-2">Document Link</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" id="docs" placeholder="Provide Documents Drive link" name="docs" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label htmlFor="desc" className="control-label col-sm-2">Description</Form.Label>
                    <Col sm={10}>
                        <Form.Control as="textarea" cols="20" rows="10" placeholder="Describe Request ...." />
                    </Col>
                </Form.Group>

                <Form.Group class="col-md-12 text-center">
                <input type="submit" value='Submit Request' name="submit" />
                </Form.Group>
            </Form>
        </Container>
      </div>
    )

}


export default Faculty_NewRequest