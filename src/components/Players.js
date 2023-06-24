import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
export default function Players() {
  const navigate = useNavigate();
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    fetch("https://64950568b08e17c917919255.mockapi.io/Playerws")
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

  return (
    <Grid container spacing={2} style={{ marginTop: "10px" }}>
      {APIData.map((data) => (
        <Grid item xs={12} sm={6} md={4} key={data.id}>
          <Card>
            <CardMedia
              component="img"
              height="290"
              image={data.img}
              alt={data.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.club}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">{data.nation}</Button>
              <Button
                size="small"
                onClick={() => navigate(`/detail/${data.id}`)}
              >
                Detail
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
