import { Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { Button } from "@mui/material";
export default function Detail() {
  const baseURL = "https://64abbfd59edb4181202e72e4.mockapi.io/api/v1/Users";
  const navigate = useNavigate();
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAPIData(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  let params = useParams();
  let staff = APIData.find((e) => {
    return e.id == params.id;
  });

  const form = React.useRef();

  return (
    <Container
      maxWidth="false"
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          marginRight: { sm: "2rem", xs: 0 },
          marginBottom: { sm: 0, xs: "1rem" },
          width: { sm: "30%", xs: "100%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: "100%", // Adjust the width to make the image smaller
            maxWidth: "300x", // Define a maximum width for the image
            objectFit: "contain", // Preserve aspect ratio and fit the image within the container
          }}
          src={staff && staff.avatar}
          alt={staff && staff.title}
        />
      </Box>
      <Box sx={{ width: { sm: "60%", xs: "100%" } }}>
        <Button
          startIcon={<ArrowBack />}
          variant="outlined"
          color="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </Button>
        <Typography variant="h4" component="h1">
          Name : {staff && staff.name}
        </Typography>
        <Typography variant="h4" component="h1">
          Age : {staff && staff.age}
        </Typography>
        <Typography variant="h4" component="h1">
          Address : {staff && staff.address}
        </Typography>
      </Box>
    </Container>
  );
}
