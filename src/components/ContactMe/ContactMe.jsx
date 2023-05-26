import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box } from "@mui/material";

export const ContactMe = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isHover, setHover] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q6hxnoe",
        "template_394z1pm",
        form.current,
        "3A80vVow_2PyFARCI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setText("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          paddingTop: "10vh ",
          width: "80%",
          margin: "0 auto",
          background: "rgba(0, 150, 0, 0.2)",
          borderRadius: "0 0 20px 20px",
        }}
      >
        <form
          autoComplete="off"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 3rem",
            height: "400px",
          }}
          ref={form}
          onSubmit={sendEmail}
        >
          <p
            style={{
              fontFamily: "GlassTTY VT220",
              letterSpacing: "0.1rem",
              display: "inline-block",
              fontSize: "1.2rem",
              color: "#0f0",
              marginBottom: "11px",
            }}
          >
            [ root@guest contact me ]# ./email.sh{" "}
          </p>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <label
              style={{
                fontFamily: "GlassTTY VT220",
                letterSpacing: "0.1rem",
                display: "inline-block",
                fontSize: "1.2rem",
                color: "#0f0",
                marginRight: "12px",
              }}
            >
              name:
            </label>
            <input
              style={inputStyle}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="user_name"
            />
          </Box>
          <Box>
            <label style={console__text}>email:</label>

            <input
              style={inputStyle}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="user_email"
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <label style={console__text}>text: </label>

            <textarea
              style={{
                background: "rgba(0, 255, 0, 0.2)",
                width: "500px",
                height: "100px",
                border: "none",
                fontFamily: "GlassTTY VT220",
                letterSpacing: "0.1rem",
                fontSize: "1.2rem",
                color: "#e39d24",
                margin: " 0 16px 5px",
                display: "inline-block",
                outline: "none",
              }}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              name="message"
            />
          </Box>

          <button
            style={{
              marginLeft: "72px",
              border: "none",
              width: "200px",
              background: isHover
                ? "rgba(0, 255, 0, 0.5)"
                : "rgba(0, 255, 0, 0.2)",
              fontFamily: "GlassTTY VT220",
              letterSpacing: "0.1rem",
              fontSize: "1.2rem",
              color: "#0f0",
            }}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            type="submit"
            value="Send"
          >
            Send email
          </button>
        </form>
      </Box>
    </Box>
  );
};

const inputStyle = {
  background: "rgba(0, 255, 0, 0.2)",
  width: "auto",
  border: "none",
  fontFamily: "GlassTTY VT220",
  letterSpacing: "0.1rem",
  fontSize: "1.2rem",
  color: "#e39d24",
  margin: " 0 5px 5px",
  display: "inline-block",
  outline: "none",
};

const console__text = {
  fontFamily: "GlassTTY VT220",
  letterSpacing: "0.1rem",
  display: "inline-block",
  fontSize: "1.2rem",
  color: "#0f0",
};

export default ContactMe;
