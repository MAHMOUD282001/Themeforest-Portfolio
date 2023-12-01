import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

function ServicesCard({ experience }) {
  // Theme of Colors & Typography
  let theme = useTheme();

  return (
    // Use Time Line Library To Show Experiance 
    <VerticalTimelineElement
      contentStyle={{
        background: theme.palette.tertiary.main,
        color: theme.palette.secondary.main,
      }}
      contentArrowStyle={{
        borderRight: `7px solid  ${theme.palette.tertiary.main}`,
      }}
      date={experience.date}
      iconStyle={{
        background: theme.palette.fourtiary.main,
      }}
    >
      <div>
        <Typography variant="sectionSubText" sx={{ mb: 2 }}>
          {experience.title}
        </Typography>
        <Typography variant="sectionSubSubText">
          {experience.description}
        </Typography>
      </div>
    </VerticalTimelineElement>
  );
}

export default ServicesCard;
