import { FC, useState, ChangeEvent, useContext } from "react";
import "./Data.css";
import { AppContext } from "../../App";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { ordered, restocked } from "../../redux/features/cakeSlice";
import { usePostsQuery } from "../../redux/features/query";
import { Link, useNavigate } from "react-router-dom";

export enum HairColor {
  Blonde = "Your hair is Blone,ggod for you",
  Brown = "Cool hair color",
  pink = "wow its grate",
}

interface DataProps {
  name: string;
  age: number;
  emial: string;
  hairColor: HairColor;
}

export const Data: FC<DataProps> = ({ name, emial, age, hairColor }) => {
  const [country, setCountry] = useState<string>("");
  const context = useContext(AppContext);
  console.log(context?.age);
  const { data, error, isLoading } = usePostsQuery();
  console.log(data, error, isLoading);

  const numberOfCakes = useAppSelector((state) => state.cake.numberOfCackes);
  const handleCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const history = useNavigate();

  function handleGoBack() {
    history(-1);
  }
  (() => {
    console.log("numberOfCakes", numberOfCakes);
  })();

  const dispatch = useAppDispatch();

  type Nametype = {
    firsName: string;
    lastName: string;
  };

  const nametype: Nametype = {
    firsName: "ksk",
    lastName: "basha",
  };

  const handleClick = () => {
    // Update the context values
    console.log("updating");

    context?.updateContext({ name: "John", age: 30 });
  };
  return (
    <div className="data">
      <Link to={"/dashboard"}>
        <button>Go to Dashboard</button>
      </Link>
      <button onClick={handleGoBack}>GO Back</button>
      <div>{name}</div>
      <div>{emial}</div>
      <div>{age}</div>
      <input onChange={handleCountryChange} value={country} />
      <div>{country}</div>
      {hairColor}
      <div>{nametype.firsName + nametype.lastName}</div>
      <button onClick={handleClick}>Update context</button>
      <div>number of Cakes : {numberOfCakes}</div>
      <button onClick={() => dispatch(ordered())}>orderCake</button>
      <button onClick={() => dispatch(restocked(20))}>Restock</button>
      <div>
        {data?.map((user, index) => (
          <p key={index}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

Data.propTypes = {};
