import './Faculty_Styles/DDF_NewRequest.css'

import React , {useState} from 'react'
import Faculty_Navbar from './Faculty_Navbar1'
import { Container, Row, Col, Form} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Faculty_NewRequest() {

    
    //const faculty_email=location.state;

    const faculty_email = localStorage.getItem("UserEmail")

    const [request_type, setrequest_type] = useState("Public");

    const [title, settitle] = useState("");

    const [amount,setamount] = useState(0);

    const [doc_link,setdoc_link] = useState("");

    const [description,setdescription] = useState("");


    const handle_request_type = event => {
        setrequest_type(event.target.value)
    }

    const handle_title = event => {
        settitle(event.target.value)
    }

    const handle_amount = event => {
        setamount(event.target.value)
    }

    const handle_description = event => {
        setdescription(event.target.value)
    }

    const handle_doc_link = event => {
        setdoc_link(event.target.value)
    }

    const handle_submit = event => {

        event.preventDefault();
        // const message = "Requesttype: "+ request_type + "\nTitle :" + title + "\nAmount :" + amount 
        // alert(message)

        const url = "/faculty/create_request"
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title ,requestType : request_type , amount: amount , documents : doc_link , description : description ,email_address : faculty_email   })
        };

        fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => alert(data.message))

    }

    

    return (
      <div>
        <Faculty_Navbar  />

        <Container className="reqform">
            <Form className="form-horizontal" onSubmit={handle_submit}>
                <Form.Group as={Row}>
                    <Form.Label htmlFor="reqtype" className="control-label col-sm-2">Request Type:</Form.Label>
                    <Col sm={10}>
                        <Form.Select id="reqtype"  onChange={handle_request_type}>
                            <option>Public</option>
                            <option>Personal</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label htmlFor="title" className="control-label col-sm-2">Title</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" id="title" placeholder="Enter Request Title" name="title"  onChange={handle_title}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label htmlFor="amount" className="control-label col-sm-2">Amount</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="number" id="amount" placeholder="Enter Request Amount" name="amount" onChange={handle_amount} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label htmlFor="docs" className="control-label col-sm-2">Document Link</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" id="docs" placeholder="Provide Documents Drive link" name="docs" onChange={handle_doc_link}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label htmlFor="desc" className="control-label col-sm-2">Description</Form.Label>
                    <Col sm={10}>
                        <Form.Control as="textarea" cols="20" rows="10" placeholder="Describe Request ...." onChange={handle_description} />
                    </Col>
                </Form.Group>

                <Form.Group className="col-md-12 text-center">
                <input type="submit" value='Submit Request' name="submit" />
                </Form.Group>
            </Form>
        </Container>
      </div>
    )

}


export default Faculty_NewRequest