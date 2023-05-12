import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { Post, useAddPostMutation, usePostQuery, useUpdatePostMutation } from "../../redux/features/query";
import { toast } from "react-toastify";
interface DashboardProps { }

export const Dashboard: React.FunctionComponent<DashboardProps> = () => {
  const { data, error, } = usePostQuery("1");
  const history = useNavigate();

  const [addPost, { ...isLoading }] = useAddPostMutation()
  const [updatePost, { ...updaPostDetails }] = useUpdatePostMutation()
  function handleClick() {
    history(-1);
  }

  const handleAddPost = () => {
    const post: Post = {
      id: 1,
      title: "test",
      body: "test",
      userId: 1
    }

    addPost(post).unwrap()
      .then((payload) => {
        console.log("succes", payload);
        toast.success("added post Succesfuly!")

      })
      .catch((err) => {
        console.log("Error", err);

      })
  }

  console.log(updaPostDetails);

  const handleUpdatePost = () => {
    const post: Post = {
      id: 1,
      title: "ksk",
      body: "ksk",
      userId: 1
    }

    updatePost(post).unwrap()
      .then((payload) => {
        console.log("succes", payload);
        toast.success("updated post Succesfuly!")
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

      <button onClick={handleUpdatePost}>
        Update Post
      </button>
    </div>
  );
};
