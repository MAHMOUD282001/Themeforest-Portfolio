import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  useTheme,
} from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import contactImg from "../assets/contact.svg";

function Contact() {
  // State & Variables

  // Theme of Colors & Typography
  let theme = useTheme();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Use Email Js To Send Data
    emailjs
      .send(
        "USE EMAIL JS SERVICE",
        "USE EMAIL JS TEMPLATE",
        {
          from_name: form.name,
          to_name: "TO NAME",
          from_email: form.email,
          to_email: "TO EMAIL",
          message: form.message,
        },
        "USE EMAIL JS PUPLIC KEY"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("YOUR MESSAGE SENT SUCCESSFULLY");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("ERROR, PLEASE TRY AGAIN");
        }
      );
  };

  return (
    <Box id="contact" sx={{padding: { md: "6.5rem 0", xs: "3.5rem 0" }}}>
      <Container>
        <Typography
          variant="sectionHeadText"
          sx={{ color: theme.palette.secondary.main }}
        >
          Contact Me
        </Typography>
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            flexDirection: { md: "row", xs: "column-reverse" },
          }}
        >
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography
                variant="sectionSubText"
                sx={{ color: theme.palette.secondary.main }}
              >
                Get In Touch
              </Typography>
            </Box>

            {/* Form To Submit Data */}

            <form onSubmit={handleSubmit} ref={formRef}>
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                InputLabelProps={{
                  style: {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                InputLabelProps={{
                  style: {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                id="message"
                label="Message"
                name="message"
                autoComplete="msg"
                multiline
                rows={4}
                value={form.message}
                onChange={handleChange}
                InputLabelProps={{
                  style: {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "row-reverse",
                  mt: 2,
                }}
              >
                <button className="common-btn">
                  {" "}
                  {loading ? "Sending" : "Send"}{" "}
                </button>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: { md: "400px", xs: "350px" },
                mt: { md: 0, xs: "10px" },
              }}
            >
              {/* Img Of Contact */}
              <img src={contactImg} alt="Contact" className="contact-img" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
