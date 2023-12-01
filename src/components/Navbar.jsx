// Import Components
import { Container, IconButton, Stack, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { Link } from "react-scroll";

function Navbar({ setMode }) {
  // States & Variables

  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let theme = useTheme();

  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "experiance",
      title: "Experiance",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  // Use Effect When Scroll To Handle Navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        py: 2,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 20,
        width: "100%",
        backgroundColor: scrolled ? "#050816" : "transparent",
      }}
      className="navbar"
    >
      <Container style={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            sx={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Link
              href={"hero"}
              to={"hero"}
              spy={true}
              smooth={true}
              offset={-150}
              duration={100}
              style={{ cursor: "pointer" }}
            >
              {/* Logo Img */}
              <img src={logo} alt="logo" />
            </Link>
          </Box>

          {/* Nav Links On Laptops*/}
          <Box sx={{ display: { sm: "flex", xs: "none" } }}>
            <ul>
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  style={{
                    color: "#fefefe",
                    marginRight: "20px",
                    fontSize: "18px",
                  }}
                >
                  <Link
                    href={navLink.id}
                    to={navLink.id}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={100}
                    style={{ cursor: "pointer" }}
                  >
                    {navLink.title}
                  </Link>
                </li>
              ))}
              {/* Dark Mode & Light Mode */}
              <Stack direction={"row"} style={{ marginLeft: "auto" }}>
                {theme.palette.mode === "light" ? (
                  <IconButton
                    aria-label={"Dark & Light Mode Icon"}
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );
                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                    sx={{ marginRight: "20px" }}
                  >
                    <LightModeOutlined sx={{ color: "#fff" }} />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label={"Dark & Light Mode Icon"}
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );

                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                    sx={{ marginRight: "20px" }}
                  >
                    <DarkModeOutlined sx={{ color: "#fff" }} />
                  </IconButton>
                )}
              </Stack>
            </ul>
          </Box>

          {/* Menu Icon Of Mobile Links */}
          <Box sx={{ display: { xs: "block", sm: "none", cursor: "pointer" } }}>
            <img
              src={toggle ? close : menu}
              alt="menu"
              onClick={() => setToggle(!toggle)}
            />
          </Box>

          {/* Nav Links On Mobile*/}

          <Box
            sx={{
              display: { xs: toggle ? "block" : "none", sm: "none" },
              position: "absolute",
              top: "100px",
              right: 0,
              textAlign: "left",
              background: theme.palette.tertiary.main,
              width: "150px",
              borderRadius: "4px",
              marginRight: "16px",
              padding: 2,
            }}
          >
            <ul
              style={{ flexDirection: "column", alignItems: "center", gap: 2 }}
            >
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  style={{
                    color: "#fefefe",
                    fontSize: "18px",
                    padding: "8px",
                  }}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <Link
                    href={navLink.id}
                    to={navLink.id}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    style={{ cursor: "pointer" }}
                  >
                    {navLink.title}
                  </Link>
                </li>
              ))}

              {/* Dark Mode & Light Mode */}
              <Stack direction={"row"}>
                {theme.palette.mode === "light" ? (
                  <IconButton
                    aria-label={"Dark & Light Mode Icon"}
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );
                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                  >
                    <LightModeOutlined sx={{ color: "#fefefe" }} />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label={"Dark & Light Mode Icon"}
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );

                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                  >
                    <DarkModeOutlined sx={{ color: "#fefefe" }} />
                  </IconButton>
                )}
              </Stack>
            </ul>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
