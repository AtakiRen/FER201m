import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CardContent, Card, Typography } from "@mui/material";

export default function Login() {
  const { googleSignIn, user } = UserAuth(); // Corrected typo here
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn(); // Corrected typo here
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 1500,
        height: "650px",
        border: "1px solid #000000",
      }}
    >
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography fontSize={40}>Login to become manager</Typography>
          <GoogleButton onClick={handleGoogleSignIn} />{" "}
        </CardContent>
      </Card>

      {/* Corrected function name here */}
    </div>
  );
}
