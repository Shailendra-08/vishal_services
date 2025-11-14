import vishal from "../assets/vishal.jpg";
function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919876543210';
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">Get in touch for quality service</p>

      <div className="contact-card">
        <div className="contact-icon"><img src={vishal} alt="contact icon"  style={{
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
  }}/>
 </div>
        <h2>Vishal Mesharam</h2>
        <p className="contact-role">Owner & Service Professional</p>

        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-label">Phone:</span>
            <a href="tel:+919876543210" className="contact-value">+91 7499937772</a>
          </div>

          <div className="contact-item">
            <span className="contact-label">Location:</span>
            <span className="contact-value">Gondia City</span>
          </div>
        </div>

        <div className="contact-actions">
          <button className="contact-btn call-btn" onClick={handleCallClick}>
            <span className="btn-icon">📞</span> Call Now
          </button>
          <button className="contact-btn whatsapp-btn" onClick={handleWhatsAppClick}>
            <span className="btn-icon">📱</span> WhatsApp
          </button>
        </div>
      </div>

      <div className="business-hours">
        <h3>Business Hours</h3>
        <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
        <p>Sunday: 9:00 AM - 6:00 PM</p>
      </div>
    </div>
  );
}

export default Contact;
