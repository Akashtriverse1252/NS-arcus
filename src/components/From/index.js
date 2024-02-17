import axios from "axios";
import React, { useState } from "react";

export const Index = ({ onHover }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    emailAddress: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    mobileNumber: "",
    emailAddress: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   console.log( "hover is from child ", onHover)

  const handleMouseEnter = () => {
    // setIsHovered(true);
    onHover(true); // Inform parent component about hover state change
  };

  const handleMouseLeave = () => {
    // setIsHovered(false);
    onHover(false); // Inform parent component about hover state change
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (formData.mobileNumber.trim() === "") {
      newErrors.mobileNumber = "Mobile number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber =
        "Invalid mobile number format (should be 10 digits)";
      isValid = false;
    }

    if (formData.emailAddress.trim() === "") {
      newErrors.emailAddress = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Invalid email format";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      const url = "https://nsarcus.com/api/submit_form.php";
      let fData = new FormData();
      fData.append("user_name", formData.name);
      fData.append("user_phone", formData.mobileNumber);
      fData.append("user_email", formData.emailAddress);
      fData.append("utm_url", window.location.href);

      axios
        .post(url, fData)
        .then((response) => {
          // Check if the response JSON has a "success" field
          if (response.data.success) {
            // If "success" is true, show the thank you message
            setShowThankYou(true);

            setFormData({
              name: "",
              mobileNumber: "",
              emailAddress: "",
            });
          }
          // Set isSubmitting to false regardless of success or failure
          setIsSubmitting(false);
        })
        .catch((error) => {
          // Handle an error
          alert(error);

          // Set isSubmitting to false on error
          setIsSubmitting(false);
        });

      // ...
    }
  };
      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);

  return (
    <>
      {showThankYou && (
        <div className="thank-you-overlay">
          <div className="thank-you-popup">
            <button
              className="close-button"
              onClick={() => setShowThankYou(false)}
            >
              &times;
            </button>
            <h3>Thank you for submitting the form!</h3>
            {/* Add any other content you want to show in the pop-up */}
          </div>
        </div>
      )}
      <div className="enq_form">
        <div
          className="contact_mobile_form"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h4>Request a call back</h4>
          <form onSubmit={handleSubmit}>
            <ul>
              <li>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className={
                    errors.name
                      ? "error-input"
                      : formData.name
                      ? "input-filled"
                      : ""
                  }
                />
              </li>
              <li>
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Mobile*"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className={
                    errors.mobileNumber
                      ? "error-input"
                      : formData.mobileNumber
                      ? "input-filled"
                      : ""
                  }
                />
              </li>
              <li>
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Email*"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className={
                    errors.emailAddress
                      ? "error-input"
                      : formData.emailAddress
                      ? "input-filled"
                      : ""
                  }
                />
              </li>
            </ul>

            <button
              type="submit"
              className={`enq_btn btn10 ${isSubmitting ? "disabled" : ""}`}
              disabled={isSubmitting}
            >
              <div>
                <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
