import { Phone, WhatsApp } from "@mui/icons-material";
import { Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import meImg from "../assets/Me.webp";
import Typed from "react-typed";
import { Link } from "react-scroll";

function Hero() {
  // Theme of Colors & Typography
  let theme = useTheme();

  return (
    <Box className="hero">
      <Box
        sx={{
          position: "absolute",
          top: { md: "50%", xs: "60%" },
          transform: "translateY(-50%)",
          left: "0",
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { md: "space-between", xs: "center" },
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                gap: 2,
              }}
            >
              {/* Introduce Your Self */}

              <Box sx={{ width: { sm: "70vw", md: "50vw" } }}>
                <Typography variant="heroHeadText">
                  <Typed
                    typeSpeed={100}
                    loop
                    showCursor={true}
                    bindInputFocusEvents={false}
                    cursorChar="|"
                    autoInsertCss={true}
                    strings={["I am Mahmoud Khallaf"]}
                  ></Typed>
                </Typography>

                <Typography variant="heroSubText" sx={{ my: 3 }}>
                  Hello, I am Mahmoud Khallaf, Front End Developer React Js
                </Typography>

                <button className="common-btn">
                  <Link
                    href={"projects"}
                    to={"projects"}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={100}
                    style={{ cursor: "pointer" }}
                  >
                    View Projects
                  </Link>
                </button>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  width: { xs: "250px", md: "400px" },
                  height: { xs: "250px", md: "400px" },
                  mt: { xs: "40px", md: "0" },
                  background: theme.palette.tertiary.main,
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {/* Your Img */}
                <img src={meImg} alt="User Img" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Link
        href={"about"}
        to={"about"}
        spy={true}
        smooth={true}
        offset={-150}
        duration={100}
        style={{ cursor: "pointer" }}
      >
        <button class="btn" aria-label="Scroll Btn">
          <div class="scroll"> </div>
        </button>
      </Link>
    </Box>
  );
}

export default Hero;
