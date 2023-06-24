import React from "react";
import ModalCase from "./ModalCase";
import {
  CardContent,
  Grid,
  CardMedia,
  Button,
  Card,
  Typography,
  CardActions,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SlideshowIcon from "@mui/icons-material/Slideshow";

export default function DetailPlayer() {
  const [APIData, setAPIData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
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

  let params = useParams();
  let player = APIData.find((e) => {
    return e.id == params.id;
  });

  // return (
  //   <div>
  //     <Grid>
  //       <Card>
  //         <CardMedia
  //           component="img"
  //           height="290"
  //           image={player && player.img}
  //           alt={player && player.name}
  //         />
  //         <CardContent>
  //           <Button
  //             onClick={() => {
  //               setIsOpen(true);
  //             }}
  //           >
  //             <SlideshowIcon />
  //           </Button>
  //         </CardContent>
  //       </Card>
  //       {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
  //     </Grid>
  //   </div>
  // );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "30px",
      }}
    >
      <Card
        sx={{
          maxWidth: 1000,
          maxHeight: 900,
          margin: "5%",
        }}
      >
        <CardMedia
          component="img"
          height="500"
          image={player && player.img}
          alt={player && player.name}
          style={{ objectFit: "cover", height: "80vh" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" maxWidth={300}>
            {player && player.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {player && player.info}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <SlideshowIcon />
          </Button>
        </CardActions>
        {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
      </Card>
    </div>
  );
}
