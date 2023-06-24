import React, { useEffect } from "react";
import {
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Alert,
  AlertTitle,
  DialogActions,
} from "@mui/material";
import { Switch } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Add() {
  // FETCH URL API
  const baseUrl = "https://64950568b08e17c917919255.mockapi.io/Playerws";
  //  CREATE initialState

  const initialState = {
    name: "",
    nation: "",
    club: "",
    cost: 0,
    clip: "",
    info: "",
    img: "",
    top: false,
  };

  const [state, setState] = useState(initialState);
  const { name, nation, club, cost, clip, info, img, top } = state;
  const { id } = useParams();
  const navigate = useNavigate();

  const getInfoPlayer = async (id) => {
    const res = await axios.get(`${baseUrl}/${id}`);
    if (res.status === 200) {
      setState(res.data);
    }
  };

  useEffect(() => {
    if (id) getInfoPlayer(id);
  }, [id]);

  const addNewPlayer = async (data) => {
    const res = await axios.post(`${baseUrl}`, data);
    if (res.status === 200) {
      alert("New Players has been added sucessfully ~");
    }
  };
  const updatePlayer = async (playerID, data) => {
    const res = await axios.put(`${baseUrl}/${playerID}`, data);
    if (res.status === 200) {
      alert(`A Players with id = ${playerID} successfully`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name.trim() === "" ||
      nation.trim() === "" ||
      club.trim() === "" ||
      cost === "" ||
      clip.trim() === "" ||
      info.trim() === "" ||
      img.trim() === ""
    ) {
      alert("Please provide value into each input field");
    } else {
      if (!id) {
        addNewPlayer(state);
        navigate("/");
      } else {
        updatePlayer(id, state);
        navigate("/dashboard");
      }
    }
  };

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    setState((state) => ({ ...state, [name]: value }));
  };

  //     onSubmit: (values) => {
  //       fetch(baseUrl, {
  //         method: "POST",
  //         body: JSON.stringify(values),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "same-origin",
  //       })
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error(`HTTP Status: ${response.status}`);
  //           }
  //           return response.json();
  //         })
  //         .then((data) => setOpen(true))
  //         .catch((error) => console.log(error.message));
  //     },

  // //     validationSchema: Yup.object({
  // //       name: Yup.string()
  //         .required("Required.")
  //         .min(2, "Must be 2 characters or more"),
  //       nation: Yup.string()
  //         .required("Required.")
  //         .min(2, "Must be 2 characters or more"),
  //       club: Yup.string()
  //         .required("Required.")
  //         .min(2, "Must be 2 characters or more"),
  //       program: Yup.number().integer().typeError("Please type a number."),
  //       description: Yup.string()
  //         .required("Required.")
  //         .min(10, "Must be 10 characters or more"),
  //       clip: Yup.string()
  //         .required("Required.")
  //         .min(10, "Must be 10 characters or more"),
  //       img: Yup.string()
  //         .required("Required.")
  //         .min(10, "Must be 10 characters or more"),
  //     }),
  //   });
  //   const [open, setOpen] = useState(false);
  //   const { id } = useParams();
  //   const navigate = useNavigate();

  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  //   const updatePlayers = async (PlayerID, data) => {
  //     const res = await axios.put(`${baseUrl}/${PlayerID}`, data);
  //     if (res.status === 200) {
  //       alert(`Updated Players with ID = ${PlayerID} sucessfully!!!`);
  //     }
  //   };
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if (
  //       formik.values.name ||
  //       formik.values.nation ||
  //       formik.values.club ||
  //       formik.values.cost ||
  //       formik.values.clip ||
  //       formik.values.description ||
  //       formik.values.img ||
  //       formik.values.top
  //     ) {
  //       alert("Please provide value into each input field");
  //     } else {
  //       try {
  //         if (!id) {
  //           formik.handleSubmit();
  //         } else {
  //           updatePlayers(id, formik.values);
  //           navigate("/list");
  //         }
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     }
  //   };

  return (
    <Card
      container
      spacing={2}
      style={{ marginTop: "10px", marginLeft: "40px" }}
    >
      <Typography fontSize="30px" align="center" fontWeight={500}>
        {id ? "UPDATE" : "ADD A NEW"} PLAYER
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={state.name}
          onChange={handleInputChange}
        />
        {/* {formik.errors.name && (
          <Typography variant="caption" color="red">
            {formik.errors.name}
          </Typography>
        )} */}
        <TextField
          margin="dense"
          name="club"
          label="Club"
          type="text"
          fullWidth
          variant="standard"
          value={state.club}
          onChange={handleInputChange}
        />

        {/* {formik.errors.club && (
          <Typography variant="caption" color="red">
            {formik.errors.club}
          </Typography>
        )} */}
        <TextField
          margin="dense"
          name="nation"
          label="Nation"
          type="text"
          fullWidth
          variant="standard"
          value={state.nation}
          onChange={handleInputChange}
        />
        {/* {formik.errors.nation && (
          <Typography variant="caption" color="red">
            {formik.errors.nation}
          </Typography>
        )} */}
        <TextField
          margin="dense"
          name="img"
          label="URL of image"
          type="text"
          fullWidth
          variant="standard"
          value={state.img}
          onChange={handleInputChange}
        />
        {/* {formik.errors.img && (
          <Typography variant="caption" color="red">
            {formik.errors.img}
          </Typography>
        )} */}
        <TextField
          margin="dense"
          name="cost"
          label="Market value"
          type="text"
          fullWidth
          variant="standard"
          value={state.cost}
          onChange={handleInputChange}
        />
        {/* {formik.errors.cost && (
          <Typography variant="caption" color="red">
            {formik.errors.cost}
          </Typography>
        )} */}
        <TextField
          margin="dense"
          name="clip"
          label="Intro video"
          type="text"
          fullWidth
          variant="standard"
          value={state.clip}
          onChange={handleInputChange}
        />
        {/* {formik.errors.clip && (
          <Typography variant="caption" color="red">
            {formik.errors.clip}
          </Typography>
        )} */}
        <TextField
          multiline
          rows={2}
          margin="dense"
          name="info"
          label="Information"
          type="text"
          fullWidth
          variant="standard"
          value={state.info}
          onChange={handleInputChange}
        />
        {/* {formik.errors.description && (
          <Typography variant="caption" color="red" display="block">
            {formik.errors.description}
          </Typography>
        )} */}
        <FormControlLabel
          control={<Switch />}
          label="Top players"
          name="agree"
        />
        <br />
        <Button variant="contained" size="small" type="submit">
          {id ? "Update" : "Add"}
        </Button>
      </form>
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Congraturation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Alert severity="success">
              <AlertTitle>Adding successful!</AlertTitle>
            </Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              Dashboard
            </Link>
          </Button>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog> */}
    </Card>

    //•	Using the POST method in onSubmit:
  );
}
