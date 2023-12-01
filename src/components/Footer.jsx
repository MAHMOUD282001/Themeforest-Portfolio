import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";

function Footer() {
  // Theme of Colors & Typography
  let theme = useTheme();

  return (
    <Box>
      <Container>
        <Box
          sx={{
            textAlign: "center",
            padding: "10px 0",
          }}
        >
          <Typography
            variant="sectionSubSubText"
            sx={{ color: theme.palette.secondary.main }}
          >
            All Rights Reserved To{" "}
            <a
              href="https://mahmoud282001.github.io/my-new-portfolio/"
              target="_blank"
            >
              Mahmoud Khallaf
            </a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
