import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { myProjects } from "../../data";



function Projects() {
  // State & Variables
  // Theme of Colors & Typography
  let theme = useTheme();

  let [active, setActive] = useState("all");

  let [updatedProjects, setUpdatedProjects] = useState(myProjects);

  // Function To Update Projects
  let updateProjects = (category) => {
    setActive(category);
    if (category === "all") {
      setUpdatedProjects(myProjects);
    } else {
      setUpdatedProjects([]);
      setTimeout(() => {
        let newProjects = updatedProjects.filter((updatedProject) => {
          return updatedProject.category === category;
        });
        setUpdatedProjects(newProjects);
      });
    }
  };

  return (
    <Box id={"projects"} sx={{padding: { md: "6.5rem 0", xs: "3.5rem 0" }}}>
      <Container>
        <Typography
          variant="sectionHeadText"
          sx={{ color: theme.palette.secondary.main }}
        >
          Projects
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            {/* Butons To Filter Projects */}
            <Box>
              <button
                onClick={() => updateProjects("all")}
                className={`common-btn ${active === "all" ? "active" : ""}`}
                style={{ width: "100%", marginBottom: "16px" }}
              >
                All
              </button>
              <button
                onClick={() => updateProjects("htmlCss")}
                className={`common-btn ${active === "htmlCss" ? "active" : ""}`}
                style={{ width: "100%", marginBottom: "16px" }}
              >
                Html & Css
              </button>
              <button
                className="common-btn"
                style={{ width: "100%", marginBottom: "16px" }}
              >
                Html & Css & Js
              </button>
              <button
                className="common-btn"
                style={{ width: "100%", marginBottom: "16px" }}
              >
                React Js
              </button>
              <button
                className="common-btn"
                style={{ width: "100%", marginBottom: "16px" }}
              >
                React Js & MUI
              </button>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              {updatedProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
