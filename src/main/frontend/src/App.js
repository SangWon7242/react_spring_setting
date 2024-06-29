import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [hello, setHello] = useState("");
  const [no, setNo] = useState(0);

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

    axiosInstance
      .get("/decrease")
      .then((response) => {
        setNo(response.data);
      })
      .catch((error) => console.log(error));

    axiosInstance
      .get("/reset")
      .then((response) => {
        setNo(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const increaseNo = () => {
    const axiosInstance = axios.create({
      baseURL: "/usr", // 기본 경로 설정
    });

    axiosInstance
      .get("/increase")
      .then((response) => {
        setNo(response.data);
      })
      .catch((error) => console.log(error));
  };

  const decreaseNo = () => {
    const axiosInstance = axios.create({
      baseURL: "/usr",
    });

    axiosInstance
      .get("/decrease")
      .then((response) => {
        setNo(response.data);
      })
      .catch((error) => console.log(error));
  };

  const reset = () => {
    const axiosInstance = axios.create({
      baseURL: "/usr",
    });

    axiosInstance
      .get("/reset")
      .then((response) => {
        setNo(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div> 백엔드에서 가져온 데이터: {hello} </div>
      <div>숫자 : {no}</div>
      <button onClick={increaseNo}>증가</button>
      <button onClick={decreaseNo}>감소</button>
      <button onClick={reset}>초기화</button>
    </div>
  );
}

export default App;
