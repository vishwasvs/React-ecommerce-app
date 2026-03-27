const Contact = () => {
  return (
    <div className="container mt-5 py-5 w-50 rounded-4 bg-secondary d-flex flex-column  align-items-center">
      <h2 className="mb-3">Contact Us</h2>

      <form className="w-50 py-3">
        <input className="form-control mb-3" placeholder="Your Name" />
        <input className="form-control mb-3" placeholder="Email" />
        <textarea className="form-control mb-3" placeholder="Message" />
        <div className="d-flex justify-content-center">
           <button className="btn btn-dark">Send</button>
        </div>
      </form>

    </div>
  );
};

export default Contact;