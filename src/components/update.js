import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Update() {
  let navigate = useNavigate();
  const [id, setID] = useState(null);
  const [myTheater, setMyTheater] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setMyTheater(localStorage.getItem("My Theater Choice"));
    setMyEmail(localStorage.getItem("My Email"));
    setComments(localStorage.getItem("Comments"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(
        `https://65d7734c27d9a3bc1d7b10de.mockapi.io/api/final/finalnm/${id}`,
        {
          myTheater,
          myEmail,
          comments,
        }
      )
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>My Theater</label>
          <input
            placeholder="My Theater Choice"
            value={myTheater}
            onChange={(e) => setMyTheater(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>My Email Address</label>
          <input
            placeholder="My Email Address"
            value={myEmail}
            onChange={(e) => setMyEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Text</label>
          <input
            placeholder="Leave your review!"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
}
