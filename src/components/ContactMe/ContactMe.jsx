import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, Typography } from "@mui/material";

import style from "./ContactMe.module.css";

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
          alert("Message sent");
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
          <Typography sx={ide__string}>
            [ root@guest contact me ]# ./email.sh{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <label className={style.ide__label}>
              name:
              <span style={{ color: "transparent" }}>0</span>
            </label>
            <input
              className={style.inputStyle}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="user_name"
            />
          </Box>
          <Box>
            <label className={style.ide__label}>email:</label>

            <input
              className={style.inputStyle}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="user_email"
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <label className={style.ide__label}>text: </label>

            <textarea
              className={style.ide__textarea}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              name="message"
            />
          </Box>

          <button
            className={style.ide__button}
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

// const inputStyle = {
//   background: "rgba(0, 255, 0, 0.2)",
//   width: "auto",
//   border: "none",
//   fontFamily: "GlassTTY VT220",
//   letterSpacing: "0.1rem",
//   fontSize: "1.2rem",
//   color: "#e39d24",
//   margin: " 0 5px 5px",
//   display: "inline-block",
//   outline: "none",
// };

// const console__text = {
//   fontFamily: "GlassTTY VT220",
//   letterSpacing: "0.1rem",
//   display: "inline-block",
//   fontSize: "1.2rem",
//   color: "#0f0",
// };

const ide__string = {
  fontFamily: "GlassTTY VT220",
  whiteSpace: "pre-line",
  fontSize: { xs: "0.5rem", sm: "0.9rem", lg: "1.2rem" },
  color: "#00ff00",
};

export default ContactMe;
