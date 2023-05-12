import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { usePostQuery } from "../../redux/features/query";

interface DashboardProps {}

export const Dashboard: React.FunctionComponent<DashboardProps> = () => {
  const { data, error, isLoading } = usePostQuery("1");
  const history = useNavigate();

  function handleClick() {
    history(-1);
  }

  console.log(data, error, isLoading);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <button onClick={handleClick}>GoBack</button>
      <Link to={"/"}>
        <button>GoHome</button>
      </Link>

      <div>{data?.address.street}</div>
    </div>
  );
};
