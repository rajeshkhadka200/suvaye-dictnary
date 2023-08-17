import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { BsSearch } from "react-icons/bs";
import SearchDetails from "../components/SearchDetails";
import axios from "axios";

const Home = () => {
  const [color, setColor] = useState(true);
  const [search, setSearch] = useState("");
  // useEffect(() => {

  // }, []);

  const [data, setData] = useState([]);

  const [error, setError] = useState(false);
  // req to api on load
  useEffect(async () => {
    try {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/apple`
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const reqApi = async (e) => {
    try {
      if (e.key === "Enter") {
        const res = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
        );
        setData(res.data);

        console.log(res.data);
      }
    } catch (error) {
      setError(true);
      setData([]);
      console.log(error);
    }
  };

  return (
    <div className="home_container">
      <div className="upper_con">
        <BsSearch size={"15"} className="search_icon" />
        <input
          onKeyDown={reqApi}
          type="text"
          placeholder="Search here"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      {data.length > 0 ? (
        <SearchDetails
          design={{ color, setColor }}
          data={data}
          search={search}
        />
      ) : (
        <h1>Search for a word</h1>
      )}

      <div className="footer_img">
        <img src="/assets/share.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
