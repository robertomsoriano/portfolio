import React, { useReducer } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  name: "",
  email: "",
  message: "",
  submitted: false
};

function formReducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "email":
      return { ...state, email: action.value };
    case "message":
      return { ...state, message: action.value };
    case "submitted":
      return { ...state, submitted: true };
    default:
      throw new Error();
  }
}


export const Contact = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(state);
    axios
      .post(process.env.REACT_APP_CONTACT_FORM, {
        headers: { "Content-Type": "application/json" },
        name: state.name,
        email: state.email,
        message: state.message
      })
      .then(() => {
        dispatch({ type: "submitted" });
        Swal.fire(
          "Excellent!",
          "I will get back to you within 1-2 business days!",
          "success"
        );
        setTimeout(function() {
          window.location.reload();
        }, 3500);
      })
      .catch(error =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            "Something went wrong! Please check the form or email me to info@robertmsoriano.com"
        })
      );
  };
  return (
    <section className="container contact-section">
      <div
        className="container mb-4 d-flex flex-column  justify-content-center align-items-center"
        id="contact"
      >
        <h1>Contact Me</h1>

        <div className="contact col-md-12 col-sm-12 justify-content-center align-items-center ">
          <div className="top-line">
            <h2>Let's Get In Touch!</h2>
            <span>
              <a
                href="https://www.linkedin.com/in/roberto-soriano/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="https://twitter.com/robertomsoriano"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter-square" />
              </a>
              <a
                href="https://github.com/robertomsoriano"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square" />
              </a>
              <a href="mailto:info@robertmsoriano.com?Subject=Hello%20Robert">
                <i className="fas fa-envelope" />
              </a>
            </span>
          </div>
          <form name="contact" method={"POST"} onSubmit={e => handleSubmit(e)}>
            <div className="form-name">
              <label>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={state.name}
                onChange={e =>
                  dispatch({
                    type: "name",
                    value: e.target.value
                  })
                }
              />
            </div>
            <div className="form-email">
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={state.email}
                onChange={e =>
                  dispatch({
                    type: "email",
                    value: e.target.value
                  })
                }
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                type="text"
                id="message"
                name="message"
                value={state.message}
                onChange={e =>
                  dispatch({
                    type: "message",
                    value: e.target.value
                  })
                }
              />
            </div>
            <div className="text-center">
              <button type="submit" id="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
