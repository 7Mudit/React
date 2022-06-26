import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched:{
        firstname:false,
        lastname:false,
        telnum:false,
        email:false
      }
    };
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleBlur=this.handleBlur.bind(this)
  }
  handleInputChange(event){
    const target=event.target;
    const value=target.type==='checkbox'?target.checked:target.value
    const name=target.name
    this.setState({
        [name]:value
    })
  }
  handleSubmit(event){
    console.log("Current state is "+JSON.stringify(this.state))
    alert("Current state is "+JSON.stringify(this.state))
    event.preventDefault()
  }
  handleBlur=(field)=>(event)=>{
    this.setState({
        touched:{...this.state.touched,[field]:true}
    })
  }
  validate(firstname,lastname,telnum,email){
    const errors={  
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
    }
    if(this.state.touched.firstname&& firstname.length<3)
    {errors.firstname='First name should be >= 3 characters'}
    else if(this.state.touched.firstname&& firstname.length>10)
    {errors.firstname='First name should be <= 10 characters'}
    if(this.state.touched.lastname&& lastname.length<3)
    {errors.lastname='First name should be >= 3 characters'}
    else if(this.state.touched.lastname&& lastname.length>10)
    {errors.lastname='First name should be <= 10 characters'}

    const reg=/^\d+$/
    if(this.state.touched.telnum && !reg.test(telnum)){
        errors.telnum='Tel. numbers should contain only numbers'
    }
    if(this.state.touched.email && email.split('').filter(x=>x==='@').length!==1){
        errors.message='Email should contain an @'
    }
    return errors
  }
  render() {
    const errors=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us </BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a
                role="button"
                className="btn btn-info"
                href="https://www.skype.com/en/"
              >
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    name="firstname"
                    id="firstname"
                    valid={errors.firstname===''}
                    invalid={errors.firstname!==''}
                    placeholder="Enter your First Name"
                    value={this.state.firstname}
                    onBlur={this.handleBlur('firstname')}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.firstname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    name="lastname"
                    id="lastname"
                    onBlur={this.handleBlur('lastname')}
                    placeholder="Enter your Last Name"
                    valid={errors.lastname===''}
                    invalid={errors.lastname!==''}
                    value={this.state.lastname}
                    onChange={this.handleInputChange}
                  />
                   <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telnum" md={2}>
                  Tel. Number
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    name="telnum"
                    id="telnum"
                    placeholder="Enter your Telephone Number"
                    value={this.state.telnum}
                    valid={errors.telnum===''}
                    invalid={errors.telnum!==''}
                    onBlur={this.handleBlur('telnum')}
                    onChange={this.handleInputChange}
                  />
                   <FormFeedback>{errors.telnum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    valid={errors.email===''}
                    invalid={errors.email!==''}
                    placeholder="Enter your Email "
                    value={this.state.email}
                    
                    onBlur={this.handleBlur('email')}
                    onChange={this.handleInputChange}
                  />
                   <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="agree"   onChange={this.handleInputChange} checked={this.state.agree} />{" "}<strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                    <Input type='select' name="contactType"  onChange={this.handleInputChange} value={this.state.contactType}>
                        <option>Tel.</option>
                        <option>Email</option>
                    </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Enter Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    placeholder="Enter your Message "
                    rows='12'
                    onChange={this.handleInputChange}
                    value={this.state.message}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{size:10,offset:2}}>
                    <Button type="submit" color="primary">Send Feedback</Button>
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
