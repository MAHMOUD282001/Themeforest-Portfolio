import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import html from "../assets/tech/html.webp";
import css from "../assets/tech/css.webp";
import js from "../assets/tech/javascript.webp";
import jquery from "../assets/tech/jquery.webp";
import bootstap from "../assets/tech/bootstrap.webp";
import ajax from "../assets/tech/ajax.webp";
import json from "../assets/tech/json.webp";
import react from "../assets/tech/reactjs.webp";
import redux from "../assets/tech/redux.webp";
import typeScript from "../assets/tech/typescript.webp";
import git from "../assets/tech/git.webp";
import materialUi from "../assets/tech/material-ui.webp";
import { technologies } from "../data";

function Skills() {
  // Theme of Colors & Typography
  const theme = useTheme();

  return (
    <Box id="skills" sx={{padding: { md: "6.5rem 0", xs: "3.5rem 0" }}}>
      <Container>
        <Typography
          variant="sectionHeadText"
          sx={{ color: theme.palette.secondary.main }}
        >
          My Skills
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "space-between" },
            flexWrap: "wrap",
            gap: 3,
            rowGap: 5
          }}
        >
          {/* Map On Skills And Show Each One */}
          {technologies.map((technology) => (
            <Box
              sx={{ width: "150px", height: "150px" }}
              key={technology.name}
            >
              <img src={technology.icon} alt={technology.name}/>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;
