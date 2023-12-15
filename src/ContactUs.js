import React from "react";

import Header from "./Header";
import Footer from "./Footer";

class ContactUs extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          subject: '',
          email: '',
          message: '',
          errors: {
            name:'',
            subject:'',
            email:'',
            message:''
          },
        };
      }
    
      handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
          });
      };
    
    handleSubmit = (event) => {
        event.preventDefault();
    
        // Validate the form input
        const errors = this.validateForm();
    
        if (Object.keys(errors).length === 0) {
            this.setState({ errors });  
          // If no errors, submit the form or perform other actions
          console.log('Form submitted with value:', this.state);
          fetch('http://localhost:3007/api/contactus', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
          })
          .then((response) => response.json())
          .then((data) => {
              console.log(data);
          })
          .catch((error) => {
              console.error(error);
          });
        } else {
          // If there are errors, update the state with error messages
          this.setState({ errors });
        }
    };

    validateForm = () => {
        const { name,subject,email,message } = this.state;
        const errors = {};

        if (!name.trim()) {
            errors.name = 'Please enter name';
        }
        if (!email.trim()) {
            errors.email = 'Please enter email';
        }
        if (!subject.trim()) {
            errors.subject = 'Please enter subject';
        }
        if (!message.trim()) {
            errors.message = 'Please enter message';
        }

        return errors;
    };
      
    render() {
        const { name,subject,email,message, errors } = this.state;

        return(
            <div>
                <Header/>
                <main id="main">
                    <div class="breadcrumbs">
                        <div class="page-header d-flex align-items-center">
                            <div class="container position-relative">
                                <div class="row d-flex justify-content-center">
                                    <div class="col-lg-12 text-center">
                                        <h2>Contact Us</h2>
                                        <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav>
                            <div class="container">
                            <ol>
                                <li><a href="/home">Home</a></li>
                                <li>Contact Us</li>
                            </ol>
                            </div>
                        </nav>
                    </div>
                    <section class="sample-page contact">
                        <div class="container" data-aos="fade-up">
                            <div class="section-header">
                            <h2>Contact</h2>
                            <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
                            </div>
                            <div class="row gx-lg-0 gy-4">
                            <div class="col-lg-4 offcanvas-header">
                                <div class="info-container d-flex flex-column align-items-center justify-content-center">
                                <div class="info-item d-flex">
                                    <i class="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>
                                <div class="info-item d-flex">
                                    <i class="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                    </div>
                                </div>
                                <div class="info-item d-flex">
                                    <i class="bi bi-phone flex-shrink-0"></i>
                                    <div>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55</p>
                                    </div>
                                </div>
                                <div class="info-item d-flex">
                                    <i class="bi bi-clock flex-shrink-0"></i>
                                    <div>
                                    <h4>Open Hours:</h4>
                                    <p>Mon-Sat: 11AM - 23PM</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <form method="post" class="php-email-form" onSubmit={this.handleSubmit}>
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" value={name} onChange={this.handleInputChange}/>
                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                    </div>
                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" value={email} onChange={this.handleInputChange}/>
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" value={subject} onChange={this.handleInputChange}/>
                                    {errors.subject && <div className="text-danger">{errors.subject}</div>}
                                </div>
                                <div class="form-group mt-3">
                                    <textarea class="form-control" name="message" rows="7" placeholder="Message" value={message} onChange={this.handleInputChange}></textarea>
                                    {errors.message && <div className="text-danger">{errors.message}</div>}
                                </div>
                                <div class="my-3">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div class="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>
                            </div>
                        </div>
                  </section>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default ContactUs;