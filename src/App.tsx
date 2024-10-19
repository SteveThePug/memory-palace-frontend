import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

import { useAppDispatch } from "./hooks/hooks.ts";

import { userSet } from "./store/slices/token.ts";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token") || "null");
    if (token) dispatch(userSet(token));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
