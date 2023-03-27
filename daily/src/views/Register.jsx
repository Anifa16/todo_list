import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <div classname="form-row">
              <div classname="form-group col-md-6">
                <label htmlfor="inputEmail4">Email</label>
                <input
                  type="email"
                  classname="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div classname="form-group col-md-6">
                <label htmlfor="inputPassword4">Password</label>
                <input
                  type="password"
                  classname="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>
            <div classname="form-group">
              <label htmlfor="inputAddress">Address</label>
              <input
                type="text"
                classname="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div classname="form-group">
              <label htmlfor="inputAddress2">Address 2</label>
              <input
                type="text"
                classname="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div classname="form-row">
              <div classname="form-group col-md-6">
                <label htmlfor="inputCity">City</label>
                <input type="text" classname="form-control" id="inputCity" />
              </div>
              <div classname="form-group col-md-4">
                <label htmlfor="inputState">State</label>
                <select id="inputState" classname="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div classname="form-group col-md-2">
                <label htmlfor="inputZip">Zip</label>
                <input type="text" classname="form-control" id="inputZip" />
              </div>
            </div>
            <div classname="form-group">
              <div classname="form-check">
                <input
                  classname="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label classname="form-check-label" htmlfor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button type="submit" classname="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    );
  }
}
