import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://65d7734c27d9a3bc1d7b10de.mockapi.io/api/final/finalnm`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, myTheater, myEmail, comments } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("My Theater", myTheater);
    localStorage.setItem("My Email", myEmail);
    localStorage.setItem("Comments", comments);
  };

  const getData = () => {
    axios
      .get(`https://65d7734c27d9a3bc1d7b10de.mockapi.io/api/final/finalnm`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(
        `https://65d7734c27d9a3bc1d7b10de.mockapi.io/api/final/finalnm/${id}`
      )
      .then(() => {
        getData();
      });
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>My Theater</Table.HeaderCell>
            <Table.HeaderCell>My Email</Table.HeaderCell>
            <Table.HeaderCell>Comments</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.myTheater}</Table.Cell>
                <Table.Cell>{data.myEmail}</Table.Cell>
                <Table.Cell>{data.comments}</Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
