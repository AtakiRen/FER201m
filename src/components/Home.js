import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Info } from "@mui/icons-material";
import {
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const baseURl = "https://64abbfd59edb4181202e72e4.mockapi.io/api/v1/Users";
export default function Home() {
  const [staffs, setStaffs] = useState([]);
  const navigate = useNavigate();
  // function to get lsit of staff
  const getListofStaff = async () => {
    const res = await axios.get(`${baseURl}`);
    if (res.status === 200) {
      setStaffs(res.data);
    }
  };

  useEffect(() => {
    getListofStaff();
  }, []);

  return (
    <Grid
      container
      spacing={3}
      sx={{
        marginTop: "0",
        marginBottom: "5rem",
        padding: "2rem",
        justifyContent: "center",
      }}
    >
      {staffs &&
        staffs.map((staff) => (
          <Grid xs={12} sm={6} lg={2} item key={staff.id}>
            <Card>
              <CardMedia
                sx={{ height: 300 }}
                image={staff.avatar}
                alt={staff.name}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {staff.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {staff.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Age :{staff.age}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  startIcon={<Info />}
                  onClick={() => {
                    navigate(`/detail/${staff.id}`);
                  }}
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
