import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/home";
import Profile from "./routes/profile";
import SignUp from "./routes/signUp";
import { ChakraProvider } from "@chakra-ui/react";
import Search from "./routes/search";
import ComplaintForm from "./components/ComplaintForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import Status from "./components/ComplaintStatus";
import AdminPanel from "./components/AdminPanel";
import ToxicityPage from "./components/ToxicityPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="feed" element={<App />} />
        <Route path="admin" element={<AdminPanel />} />
        <Route path="status" element={<Status />} />
        <Route path="toxicity" element={<ToxicityPage />} />
        <Route path="complaint" element={<ComplaintForm />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="profile" element={<Profile />} />
        <Route path="search" element={<Search />} />
        <Route path="/profile/:userName" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
