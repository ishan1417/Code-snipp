import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [apiData, setApiData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);

  const getData = () => {
    axios
      .get("https://dummyjson.com/users")
      .then((resp) => {
        setApiData(resp?.data?.users);
        setfilteredData(resp?.data?.users);
      })
      .catch((err) => console.warn(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const textHandler = (e) => {
    console.log(e.target.value);
    const searchText=e.target.value.toLowerCase()
    const data = apiData.filter((item) => item.firstName.toLowerCase().includes(searchText));
    console.log(data)
    setfilteredData(data);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <input type="text" onChange={textHandler}></input>
      </div>
      <div>
        {filteredData.map((item) => (
          <div key={item.id}>{item?.firstName}</div>
        ))}
      </div>
    </div>
  );
};

export default Search;

