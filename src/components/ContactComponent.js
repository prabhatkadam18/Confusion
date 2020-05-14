import React, {Component} from 'react';
import {Link} from'react-router-dom';
import {Breadcrumb, BreadcrumbItem, FormGroup, Form, Label, Input, Col, Button} from 'reactstrap';

class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: 'Tel.',
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {        
        const {name} = event.target;
        const value = event.target.type=== 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            [name]: value
        });
        
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Submitted');
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home' >Home</Link> </BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Contact Us</h3>
                        <hr/>
                     </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" href="#" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type='text' onChange={this.handleInputChange} id="firstname" name='firstName' placeholder='First Name' value={this.state.firstName}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' onChange={this.handleInputChange} id="lastname" name='lastName' placeholder='Last Name' value={this.state.lastName}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type='tel' onChange={this.handleInputChange} id="telnum" name='telnum' placeholder='Tel. Number' value={this.state.telnum}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type='email' onChange={this.handleInputChange} id="email" name='email' placeholder='Email' value={this.state.email}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:'6', offset:'2'}} >
                                    <FormGroup check>
                                        <Label check>
                                            <Input type='checkbox' onChange={this.handleInputChange} name='agree' checked={this.state.agree} />
                                            <strong>May We Contact You?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:'3', offset:'1'}} >
                                    <Input type='select' onChange={this.handleInputChange} name='contactType' value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type='textarea' onChange={this.handleInputChange} id="message" name='message' rows='12' value={this.state.message}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                    <Button type='submit' color='primary'>
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Contact;