import { Table, TableBody, TableContainer, TableHead } from "@mui/material";
import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useEffect } from "react";
import TableRow from "@mui/material/TableRow";
import { Avatar, IconButton, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default function DashBoard() {
  const baseURL = "https://64abbfd59edb4181202e72e4.mockapi.io/api/v1/Users";
  const [staffs, setStaffs] = useState([]);
  const getListofStaff = async () => {
    const res = await axios.get(`${baseURL}`);
    if (res.status === 200) {
      setStaffs(res.data);
    }
  };

  useEffect(() => {
    getListofStaff();
  }, []);

  const handleDelete = async (id) => {
    if (
      window.confirm(
        `Are you sure that you wanted to delete a staff with ID: ${id}`
      )
    ) {
      const res = await axios.delete(`${baseURL}/${id}`);
      if (res.status === 200) {
        getListofStaff();
        alert(`You have been deleted successfully with ID : ${id}`);
      }
    }
  };

  return (
    <TableContainer style={{ marginTop: "10px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Avatar</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Age</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staffs &&
            staffs.map((staff) => (
              <StyledTableRow key={staff.id}>
                <StyledTableCell component="th" scope="row">
                  {staff.id}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Avatar
                    variant="rounded"
                    alt="avatar"
                    sx={{ width: 50, height: 60 }}
                    src={staff.avatar}
                  ></Avatar>
                </StyledTableCell>
                <StyledTableCell align="left">{staff.name}</StyledTableCell>
                <StyledTableCell align="left">{staff.age}</StyledTableCell>
                <StyledTableCell align="left">{staff.address}</StyledTableCell>
                <StyledTableCell>
                  {/* Update */}
                  <Link to={`/update/${staff.id}`}>
                    <Button variant="outlined">Update</Button>
                  </Link>
                  {/* Delete */}
                  <IconButton
                    style={{ color: "red" }}
                    onClick={() => handleDelete(staff.id)}
                  >
                    <Delete />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
