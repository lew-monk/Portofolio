const Contact = () => {
  return (
    <div>
      <div className="header">
        <h1>Contact</h1>
      </div>
      <div className="contact-container">
        <div className="phone">
          <h1>+254-716957910</h1>
          <div className="contact-cta">
            <button className="cta">Make A Call</button>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <p>
              <label>Name</label>
              <input />
            </p>
            <p>
              <label>Name</label>
              <input />
            </p>
            <button className="cta">Submit </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
