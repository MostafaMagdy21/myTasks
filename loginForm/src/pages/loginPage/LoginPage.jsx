import React, { Component } from "react";
import "./LoginPage.scss";
import Footer from "../../component/Footer";
import Header from "../../component/Header";

class LoginPage extends Component {
  state = {
    Users: {
      username: "",
      email: "",
      password: "",
      repassword: "",
      phone: "",
    },

    errors: {},
  };

  onChangeHandler = (e) => {
    console.log(e.target.value, e.target.id);

    let { Users } = this.state;
    Users[e.target.id] = e.target.value;

    this.setState({
      Users,
    });
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    let isValid = true;

    if (!this.state.Users.username) {
      errors.username = ["username is required"];
      isValid = false;
    }

    if (!this.state.Users.email) {
      errors.email = ["email is required"];
      isValid = false;
    }

    if (!this.state.Users.password) {
      errors.password = ["password is required"];
      isValid = false;
    }
    if (this.state.Users.password.length < 8) {
      errors.password = ["password shold be more than 8 char"];
      isValid = false;
    }

    if (!this.state.Users.repassword) {
      errors.repassword = ["repassword is required"];
      isValid = false;
    }
    if (this.state.Users.repassword !== this.state.Users.password) {
      errors.repassword = ["repassword and password shold be matched"];
      isValid = false;
    }

    if (!this.state.Users.phone) {
      errors.phone = ["phone is required"];
      isValid = false;
    }
    if (!isValid) {
      this.setState({
        errors,
      });
    }

    // Call Apis
    const options = {
      method: "POST",
      name: "app",
      Header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.Users),
      redirect: "follow",
    };

    const response = await fetch(global.config.base_Url, options);
    const data = response.json();

    if (data.errors) {
      this.setState({
        errors: data.errors,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="regester">
          <div className="container">
            <div className="row col-6">
              <form onSubmit={this.onSubmitHandler}>
                <div className="form-group-regester username">
                  <label htmlFor="username">*User Name</label>
                  <input
                    type="text"
                    onChange={this.onChangeHandler}
                    value={this.state.Users.username}
                    id="username"
                    className={`form-control ${
                      this.state.errors.username && "error"
                    }`}
                  />
                  {this.state.errors.username &&
                    this.state.errors.username.map((error) => (
                      <span className="errors">{error}</span>
                    ))}
                </div>

                <div className="form-group-regester email">
                  <label htmlFor="email">*E-mail</label>
                  <input
                    type="email"
                    onChange={this.onChangeHandler}
                    value={this.state.Users.email}
                    id="email"
                    className={`form-control ${
                      this.state.errors.email && "error"
                    }`}
                  />
                  {this.state.errors.email &&
                    this.state.errors.email.map((error) => (
                      <span className="errors">{error}</span>
                    ))}
                </div>

                <div className="form-group-regester password">
                  <label htmlFor="password">*Password</label>
                  <input
                    type="password"
                    onChange={this.onChangeHandler}
                    value={this.state.Users.password}
                    id="password"
                    className={`form-control ${
                      this.state.errors.password && "error"
                    }`}
                  />
                  {this.state.errors.password &&
                    this.state.errors.password.map((error) => (
                      <span className="errors">{error}</span>
                    ))}
                </div>

                <div className="form-group-regester repassword">
                  <label htmlFor="repassword">*RePassword</label>
                  <input
                    type="password"
                    onChange={this.onChangeHandler}
                    value={this.state.Users.repassword}
                    id="repassword"
                    className={`form-control ${
                      this.state.errors.repassword && "error"
                    }`}
                  />
                  {this.state.errors.repassword &&
                    this.state.errors.repassword.map((error) => (
                      <span className="errors">{error}</span>
                    ))}
                </div>

                <div className="form-group-regester phone">
                  <label htmlFor="phone">*Phone</label>
                  <input
                    type="number"
                    onChange={this.onChangeHandler}
                    value={this.state.Users.phone}
                    id="phone"
                    className={`form-control ${
                      this.state.errors.phone && "error"
                    }`}
                  />
                  {this.state.errors.phone &&
                    this.state.errors.phone.map((error) => (
                      <span className="errors">{error}</span>
                    ))}
                </div>

                <div className="btn">
                  <button className="btn btn-dark">Regester</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default LoginPage;
