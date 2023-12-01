import { Box, Container, Typography, useTheme } from "@mui/material";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperianceCard from "./ExperianceCard";
import logo from "../../assets/logo.webp";
import { experiences } from "../../data";

function Services() {
  // Theme of Colors & Typography
  let theme = useTheme();

  return (
    <Box
      id="experiance"
      sx={{ overflowX: "hidden", padding: { md: "6.5rem 0", xs: "3.5rem 0" } }}
    >
      <Container>
        <Typography
          variant="sectionHeadText"
          sx={{ color: theme.palette.secondary.main }}
        >
          Experiance
        </Typography>

        {/* Use Time Line Library To Show Experiance */}
        <VerticalTimeline lineColor={theme.palette.secondary.main}>
          {experiences.map((experience, index) => (
            <ExperianceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </Container>
    </Box>
  );
}

export default Services;
