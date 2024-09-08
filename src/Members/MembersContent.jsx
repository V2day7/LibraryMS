import React from "react";
import "./MembersContent.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MembersContentCard() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers();
    console.log("useEffect ran");
  }, []);

  function getMembers() {
    axios
      .get("http://localhost/LMS_backend-files/api/readMember.php")
      .then(function (response) {
        console.log(response.data);
        setMembers(response.data.data);
      });
  }

  return (
    <>
      <div className="mem-container">
        <h1 className="title">Cristian Blake Laviano</h1>
        <center>
          <div className="mem-scrollable-container">
            <table class="table table-hover table-striped">
              <thead class="table-dark">
                <tr>
                  <th scope="col">Member ID</th>
                  <th scope="col">FIrst Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact Number</th>
                  <th scope="col">Date of Birth</th>
                  <th scope="col">Address</th>
                  <th scope="col">Membership Start</th>
                  <th scope="col">Membership End</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, key) => (
                  <tr key={key}>
                    <td>{member.member_id}</td>
                    <td>{member.first_name}</td>
                    <td>{member.last_name}</td>
                    <td>{member.email}</td>
                    <td>{member.contact_number}</td>
                    <td>{member.dob}</td>
                    <td>{member.address}</td>
                    <td>{member.membership_start}</td>
                    <td>{member.membership_end}</td>
                    <td>
                      <button
                        type="submit"
                        class="btn btn-primary fw-bold mt-4 btn-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </center>
      </div>
    </>
  );
}
