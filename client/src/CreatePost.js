import { Form, Button, Navbar, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WM from "./WaterMark";

function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createPost = (e) => {
    e.preventDefault();

    axios
      .post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("posts");
  };

  return (

    <div className="createPost">
      <Navbar className="sameNavbar">
        <Container>
        {/* <Button variant="outline-secondary">Secondary</Button>        */}
          <Button
          variant="outline-dark"
          onClick={() => navigate("/")}
        >
          HOME
        </Button>
        </Container>
      </Navbar>
      <div className="mainCreatePost">
        <h1>Create New Note</h1>
        <Form>
          <Form.Group>
            <Form.Control
              name="title"
              value={post.title}
              onChange={handleChange}
              style={{ marginBottom: "1rem" }}
              placeholder="title"
            />
            <Form.Control
              as="textarea"
              rows={5}
              onChange={handleChange}
              name="description"
              value={post.description}
              style={{ marginBottom: "1rem" }}
              placeholder="description"
            />
          </Form.Group>
          <Button
            className="createPostBtn"
            onClick={createPost}
            variant="outline-success"
            style={{ marginBottom: "1rem" }}
          >
            CREATE NOTE
          </Button>
        </Form>
        <Button
        className="createPostBtn"
          onClick={() => navigate("posts")}
          variant="outline-success"
          // style={{ width: "100%", backgroundColor: "rgb(0, 132, 132)" }}
        >
          SEE ALL NOTES
        </Button>
      </div>
<WM/>
    </div>
  );
}

export default CreatePost;
