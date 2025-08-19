import React from "react";
import "./Contact.css";
import CountUp from "react-countup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiArrowRight } from "react-icons/ti";

const Contact = () => {
  const ContactList = [
    {
      id: 1,
      image:
        "https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/contact-map-icon1.svg",
      title: "ADDRESS :",
      description:
        "Floor 2, 4 Naval St, Ancoats, Manchester M4 6EW, United Kingdom",
    },
    {
      id: 2,
      image:
        "https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/contact-phone-icon1.svg",
      title: "OFFICE NUMBER :",
      description: "+1234567658",
    },
    {
      id: 3,
      image:
        "https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/contact-envelope-icon1.svg",
      title: "OFFICE EMAIL :",
      description: "info@gmail.com",
    },
  ];

  return (
    <div className="m-5 contact_main">
      <div
        className="text-center"
        style={{ marginTop: "150px", marginBottom: "70px" }}
      >
        <div className="Contact_title"># Get In Touch</div>
        <div className="Contact_sub my-3">Contact Us & Meet Our Team</div>
      </div>

      <div className="row my-5 px-3">
        <div
          className="col-xl-6 col-lg-6 col-sm-12 col-md-6 col-12 my-3 p-3  "
          style={{ background: "#1C1E2A", borderRadius: "20px" }}
        >
          <div className="mt-4 mb-5 text-center">
            GRAB YOUR DREAMS AND TURN THEM INTO A REALITY
          </div>

          <Form className="">
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    className="contact_form"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    className="contact_form"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    className="contact_form"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Select
                    aria-label="Default select example"
                    className="contact_form"
                  >
                    <option>Default</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col className="">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={6}
                    className="contact_form"
                    placeholder="Write a message..."
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="">
              <div className="explore-button">
                <span className="text-uppercase">Send Message</span>
                <span>
                  <TiArrowRight size={25} />
                </span>
              </div>
            </Row>
          </Form>
        </div>
        <div className="col-xl-6 col-lg-6 col-sm-12 col-md-6 col-12">
          {ContactList.map((item) => (
            <div key={item.id} className="d-flex justify-content-center">
              <div className="Contact_card my-3 d-flex ">
                <div>
                  <img
                    src={item.image}
                    alt="Contact Us"
                    style={{ width: "50px", height: "auto" }}
                  />
                </div>
                <div>
                  <div className="Contact_name">{item.title}</div>
                  <div className="Contact_desc">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Row >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28476.143371588776!2d75.74450099954794!3d26.85528134513329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a3bfa52d07%3A0xbbe9e52f9ae6fd18!2sTilak%20Tower!5e0!3m2!1sen!2sin!4v1744344390198!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{border:0, objectFit:"cover"}}
         allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          
        ></iframe>
      </Row>
    </div>
  );
};

export default Contact;
