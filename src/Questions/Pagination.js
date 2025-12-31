import React, { use, useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

const Pagination = () => {
  const [pageCount, setPageCount] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [apiData, setApiData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [tableValues, setTableValue] = useState([]);


  const pageCountHandler = (e) => {
    if (e?.target?.value > 10) {
      setErrorMessage("Page count cannot be more then 10");
    } else {
      setErrorMessage("");
      setPageCount(e?.target?.value);
    }
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((resp) => {
        setApiData(resp?.data?.users);
        setHeaders(Object.keys(resp?.data?.users[0]));
        setTableValue(apiData.map(item=>Object.values(item)))
      })
      .catch((error) => console.warn(error));
  }, []);

  console.log(headers.map((item) => item));
  return (
    <div className="pagination">
      <div>
        <div>Enter Number of Pages</div>
        <input type="number" onChange={pageCountHandler}></input>
        <div style={{ color: "red", fontWeight: 500, marginTop: "10px" }}>
          {errorMessage}
        </div>
      </div>
      {pageCount && (
        <div className="paginator">
          {Array.from({ length: pageCount }, (_, i) => (
            <div className="pages">{i + 1}</div>
          ))}
        </div>
      )}
      {apiData && (
        <div>
          <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                {headers.map(item=><th>{item}</th>)}
              </tr>
            </thead>
             <tbody>
            {apiData.map((user) => (
              <tr key={user.id}>
                {Object.values(user).map((val, i) => (
                  <td key={i}>
                    {typeof val === "object" ? JSON.stringify(val) : val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Pagination;
