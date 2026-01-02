import React, { useEffect } from "react";
const App = () => {
  useEffect(() => {
    if (window.confirm("Will you marry me?")) {
      alert("Love you");
    } else {
      alert("Karni to padegi");
    }
  }, []);
  return (
    <>
      <div>Meri Shrangika I love you</div>
      <div> </div>
    </>
  );
};

export default App;
