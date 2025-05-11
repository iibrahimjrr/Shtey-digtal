import React, { useState } from 'react';
import MyMap from './MyMap';

const StartContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    subscribe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // هنا يمكن استخدام fetch أو axios لإرسال البيانات إلى الـ API
  };

  return (
    <div>
      <section className="contact-us section">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-us-left">
                <MyMap /> {/* إدراج الخريطة هنا */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-us-form">
                  <h2>Contact With Us</h2>
                  <p>If you have any questions, please feel free to contact us.</p>

                  <form className="form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name="phone" placeholder="Phone" required value={formData.phone} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn">
                          <button className="btn" type="submit">Send</button>
                        </div>
                        <div className="checkbox">
                          <label htmlFor="subscribe">
                            <input type="checkbox" name="subscribe" id="subscribe" checked={formData.subscribe} onChange={handleChange} />
                            Do you want to subscribe to our Newsletter?
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont icofont-ui-call"></i>
                  <div className="content">
                    <h3>+(000) 1234 56789</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont-email"></i>
                  <div className="content">
                    <h3>sehty@gmail.com</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont icofont-wall-clock"></i>
                  <div className="content">
                    <h3>Everything Everywhere All at Once.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default StartContact;
