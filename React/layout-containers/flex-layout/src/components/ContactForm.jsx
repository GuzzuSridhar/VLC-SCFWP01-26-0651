import { useState } from "react";
import FlexBox from "./containers/FlexBox";

// create a contact form component
const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyle = {
    width: "90%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  return (
    <FlexBox
      direction="column"
      width="600px"
      padding="25px"
      background="#fff"
      borderRadius="15px"
    >
      <form onSubmit={handleSubmit}>
        <FlexBox direction="column" gap="10px">
          <h1>Flex Contact Form</h1>

          {/* First name */}
          <FlexBox direction="column" gap="10px">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              style={inputStyle}
            />
          </FlexBox>

          {/* Last Name */}
          <FlexBox direction="column" gap="10px">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              style={inputStyle}
            />
          </FlexBox>

          {/* Email */}
          <FlexBox direction="column" gap="10px">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
          </FlexBox>

          {/* Message */}
          <FlexBox direction="column" gap="10px">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              style={inputStyle}
            />
          </FlexBox>

          {/* Submit button */}
          <FlexBox
            direction="column"
            gap="10px"
            // justify="center"
            align="center"
          >
            <button type="submit" style={{ inputStyle }}>
              Submit
            </button>
            <button type="button" style={inputStyle}>
              Cancel
            </button>
          </FlexBox>
        </FlexBox>
      </form>
    </FlexBox>
  );
};

export default ContactForm;
