import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: "/usr", // 기본 경로 설정
    });

    axiosInstance
      .get("/hello")
      .then((response) => {
        setHello(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>백엔드에서 가져온 데이터: {hello} </div>
    </div>
  );
}

export default App;
