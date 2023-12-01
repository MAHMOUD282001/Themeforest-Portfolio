import { GitHub, Link } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  useTheme
} from "@mui/material";
import React from "react";

function ProjectCard({project}) {
  // Theme of Colors & Typography
  let theme = useTheme();

  return (
    <Grid item xs={12} md={6} lg={4} data-aos = "zoom-in">
      {/* Project Card  */}
      <Card sx={{ background: theme.palette.tertiary.main }}>
        <CardMedia sx={{ height: 220, objectFit: "contain" }} image={project.img} />
        <CardContent>
          <Typography
            gutterBottom
            variant="sectionSubText"
            sx={{ color: "#f2f2f2" }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#f2f2f2" }}
          >
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label={project.title}>
            <Link
              sx={{ color: "#f2f2f2", fontSize: "25px" }}
            />
          </IconButton>

          <IconButton aria-label={project.title}>
            <GitHub
              sx={{ color: "#f2f2f2", fontSize: "25px" }}
            />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProjectCard;
