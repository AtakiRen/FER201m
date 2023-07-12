import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  TextField,
  Typography,
  Card,
} from "@mui/material";
import { Link } from "react-router-dom";
export default function Add() {
  const baseURL = "https://64abbfd59edb4181202e72e4.mockapi.io/api/v1/Users";
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      avatar: "",
      name: "",
      age: "",
      address: "",
    },

    onSubmit: (values) => {
      fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setOpen(true))
        .catch((error) => console.log(error.message));
    },
    validationSchema: Yup.object({
      avatar: Yup.string()
        .required("Avatar must be required")
        .min(10, "Must be 10 characters or more"),
      name: Yup.string()
        .required("Name must be required")
        .min(2, "Must be 2 characters or more"),
      age: Yup.string()
        .required("Age must be required")
        .min(2, "Must be number"),
      address: Yup.string()
        .required("Address must be required")
        .min(5, "Must be 5 characters or more"),
    }),
  });

  return (
    <Card container spacing={2} style={{ margin: "40px" }}>
      <form onSubmit={formik.handleSubmit}>
        <h2>Add a new Staff</h2>
        <TextField
          autoFocus
          margin="dense"
          name="avatar"
          label="Avartar"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.avatar}
          onChange={formik.handleChange}
        />
        {formik.errors.avatar && (
          <Typography variant="caption" color="red">
            {formik.errors.avatar}
          </Typography>
        )}
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <Typography variant="caption" color="red">
            {formik.errors.name}
          </Typography>
        )}
        <TextField
          autoFocus
          margin="dense"
          name="age"
          label="Age"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.age}
          onChange={formik.handleChange}
        />
        {formik.errors.age && (
          <Typography variant="caption" color="red">
            {formik.errors.age}
          </Typography>
        )}
        <TextField
          autoFocus
          margin="dense"
          name="address"
          label="Adress"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        {formik.errors.address && (
          <Typography variant="caption" color="red">
            {formik.errors.address}
          </Typography>
        )}
        <Button variant="contained" size="small" type="submit">
          Add a new Staff
        </Button>
      </form>
      <Dialog
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
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              DashBoard
            </Link>
          </Button>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
