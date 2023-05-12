import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { Post, useAddPostMutation, usePostQuery } from "../../redux/features/query";

interface DashboardProps { }

export const Dashboard: React.FunctionComponent<DashboardProps> = () => {
  const { data, error, } = usePostQuery("1");
  const history = useNavigate();
  const [addPost, { isLoading }] = useAddPostMutation()

  function handleClick() {
    history(-1);
  }

  console.log(data, error);

  console.log("isloadAdding", isLoading);


  const handleAddPost = () => {
    const post: Post = {
      title: "test",
      body: "test",
      userId: 1
    }

    addPost(post).unwrap()
      .then((payload) => {
        console.log("succes", payload);

      })
      .catch((err) => {
        console.log("Error", err);

      })
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <button onClick={handleClick}>GoBack</button>
      <Link to={"/"}>
        <button>GoHome</button>
      </Link>

      <div>{data?.address.street}</div>

      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};
