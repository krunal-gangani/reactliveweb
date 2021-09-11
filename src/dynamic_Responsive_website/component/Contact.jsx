import React, { useState } from "react";
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault(); //defaault behaviour rokva mate (page refress no thay etle)
    alert(
      ` name is ${data.fullname} and number is ${data.phone} , email is ${data.email} , here  i want to say that ${data.msg}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  onChange={inputEvent}
                  value={data.fullname}
                  placeholder="Enter Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  PhoneNumber
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  onChange={inputEvent}
                  value={data.phone}
                  placeholder="Enter Phone Number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  onChange={inputEvent}
                  value={data.email}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="enter msg"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
