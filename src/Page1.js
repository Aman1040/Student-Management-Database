import React from "react";
import {
  Stack,
  Typography,
  Box,
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import Fingerprint from "@mui/icons-material/Fingerprint";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Page1.css";
import DrawerComp from "./DrawerComp";
const Page1 = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [id, setId] = useState(0);
  const [clgid, setClgid] = useState(0);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [clientdata, setClientdata] = useState([]);
  const [clgData, setClgData] = useState([]);

  const fetchClgData = async () => {
    await axios
      .get("http://localhost:3001/college")
      .then((res) => setClgData(res.data))
      .then(console.log(clgData))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchClgData();
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const formdata = {
      Id: id,
      fname: fname,
      Lname: lname,
      Email: email,
      Password: pass,
      College_id: clgid,
    };
    setClientdata(formdata);
    console.log(formdata);
    await axios.post("http://localhost:3001/college/update", formdata);
  };
  return (
    <div id="container">
      <DrawerComp />
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        color="textSecondary"
        mx="30%"
        my="8vh"
        sx={{
          background: "#42a5f5",
          borderRadius: 5,

          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.5)",
        }}
      >
        Enter Student Information
      </Typography>

      <Box
        fixed
        sx={{
          backgroundColor: "primary.light",
          borderRadius: 5,
          width: "30vh",
          height: "70vh",
          p: 10,
          mx: "40%",

          boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "skyblue",
          },
        }}
      >
        {
          <FormControl>
            <div>
              <TextField
                type="text"
                label="Enter First Name"
                color="primary"
                variant="outlined"
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                margin="normal"
                type="text"
                label="Enter last Name"
                color="primary"
                variant="outlined"
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                margin="normal"
                label="Enter Id"
                color="primary"
                variant="outlined"
                type="number"
                onChange={(e) => {
                  setId(parseInt(e.target.value));
                }}
              />
            </div>
            <div>
              <TextField
                margin="normal"
                label="Enter Gmail"
                color="primary"
                variant="outlined"
                type="gmail"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                margin="normal"
                label="Enter Password"
                color="primary"
                variant="outlined"
                type="password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            <div>
              <FormControl margin="normal" fullWidth="true">
                <InputLabel>Select College</InputLabel>
                <Select
                  onChange={(e) => {
                    setClgid(e.target.value);
                  }}
                >
                  {clgData.map((val, index) => {
                    return (
                      <MenuItem value={val.id}>{val.college_name}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>

            <div>
              <Button type="Submit" margin="dense" onClick={handlesubmit}>
                Submit
              </Button>
            </div>
          </FormControl>
        }
      </Box>
    </div>
  );
};

export default Page1;
