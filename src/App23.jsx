import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; //bootstrap ne import pan karvu padse

const App23 = () => {
  return (
    <>
    <h1 className="text-capitalize text-center mt-5 text-danger"> welcome to thapa technical chennal </h1>
     <p className="text-center"> <button className="btn btn-success"> Thapachennal </button> </p>
      <br />
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span class="input-group-text" id="basic-addon2">
          @example.com
        </span>
      </div>

      <label for="basic-url" class="form-label">
        Your vanity URL
      </label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">
          https://example.com/users/
        </span>
        <input
          type="text"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">$</span>
        <input
          type="text"
          class="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
        <span class="input-group-text">.00</span>
      </div>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
        />
        <span class="input-group-text">@</span>
        <input
          type="text"
          class="form-control"
          placeholder="Server"
          aria-label="Server"
        />
      </div>

      <div class="input-group">
        <span class="input-group-text">With textarea</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
    </>
  );
};
export default App23;
