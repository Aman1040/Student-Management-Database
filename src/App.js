import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
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
    <div>
      <div>
        fname:
        <input
          type="text"
          onChange={(e) => {
            setFname(e.target.value);
          }}
        ></input>
      </div>
      <div>
        lname:
        <input
          type="text"
          onChange={(e) => {
            setLname(e.target.value);
          }}
        ></input>
      </div>
      <div>
        Id:
        <input
          type="number"
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
      </div>
      <div>
        Email:
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </div>
      <div>
        Password:
        <input
          type="text"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <select
          onChange={(e) => {
            setClgid(e.target.value);
          }}
        >
          {clgData.map((val, index) => {
            return (
              <option value={val.id} key={val.id}>
                {val.college_name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <button type="Submit" onClick={handlesubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
