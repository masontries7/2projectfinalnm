import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Create() {
  let navigate = useNavigate();
  const [myTheater, setMyTheater] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [comments, setComments] = useState("");
  console.log(comments);
  const postData = () => {
    axios
      .post(`https://65d7734c27d9a3bc1d7b10de.mockapi.io/api/final/finalnm`, {
        myTheater,
        myEmail,
        comments,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>My Theater Choice</label>
          <input
            placeholder="My Theater Choice"
            onChange={(e) => setMyTheater(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>My Email</label>
          <input
            placeholder="My email address"
            onChange={(e) => setMyEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Comments</label>
          <input
            text="Leave your review!"
            onChange={(e) => setComments(e.target.value)}
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
