// import React from 'react'
// import "./Hero.css"
// import { TiArrowRight } from "react-icons/ti";


// const Hero = () => {
//   return (
//     <div className='my-5 p-5 text-center main'   >
//         <div className='heading'># World Class eSports & Gaming Site</div>
//         <div className='title'>SHAPING THE FUTURE OF</div>
//         <div className='sub_title'>ESPORTS</div>

//         <div className='my-4 py-3 d-flex gap-4 justify-content-center'>


//          <div > <span className='text-uppercse'>Explore more</span><span><TiArrowRight /></span></div>
//          <div> <span>Browser Games </span> <span><TiArrowRight /></span></div>
//         </div>

      
//     </div>
//   )
// }

// export default Hero

// -------------------------------------------very nice-------------------------------------
// import React from 'react';
// import "./Hero.css";
// import { TiArrowRight } from "react-icons/ti";

// const Hero = () => {
//   return (
//     <div className='hero-container'>
//       <div className='heading'># World Class eSports & Gaming Site</div>
//       <div className='title'>SHAPING THE FUTURE OF</div>
//       <div className='sub-title'>ESPORTS</div>

//       <div className='button-container'>
//         <div className='explore-button'>
//           <span className='text-uppercase'>Explore more</span><span><TiArrowRight size={25} /></span>
//         </div>
//         <div className='browser-button'>
//           <span>Browser Games</span> <span><TiArrowRight  size={25}/></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// --------------------------------------------with pop up--------------------------

import React, { useState } from 'react';
import "./Hero.css";
import { TiArrowRight } from "react-icons/ti";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='hero-container'>
      <div className='heading'># World Class eSports & Gaming Site</div>
      <div className='title'>Cut, Crop, Create: where your edits</div>
      <div className='sub-title'>Get Extra </div>

      <div className='button-container'>
        <div className='explore-button'>
          <span className='text-uppercase'>About Us 
          </span><span><TiArrowRight size={25} /></span>
        </div>
        <div className='browser-button' onClick={() => setShowModal(true)}>
          <span>Enroll Now
          </span> <span><TiArrowRight size={25} /></span>
        </div>
      </div>

      {showModal && (
        <div className='modal-overlay' onClick={() => setShowModal(false)}>
          <div className='modal-content modal_popup' onClick={e => e.stopPropagation()} >
            <button className='close-btn2' onClick={() => setShowModal(false)}>×</button>
            <h2>Enroll Now</h2>
            <p>Discover a curated list of top browser games. No download required. Jump in and play instantly!</p>
            <p>Discover a curated list of top browser games. No download required. Jump in and play instantly!</p>
            <Row >
              <Col xs={6}>
              <img src="/img/chat_us.png" height="85%" width="85%" class="animated-image" />
              </Col>
              <Col xs={6}>
              
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
              </Col>
            </Row>

            
            {/* <ul className='games-list'>
              <li>⚔️ War Legends</li>
              <li>🚀 Space Blasters</li>
              <li>🧠 Puzzle Master</li>
              <li>🏁 Drift Kings</li>
              <li>🐉 Dragon Realms</li>
            </ul> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
