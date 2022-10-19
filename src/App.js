import React, { useEffect, useState } from "react";
import "./App.css";

// components
import HomeScreen from "./screens/Home/HomeScreen";
// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/login/LoginScreen";

// firebase
import { auth } from "./utilities/firebase";
import { onAuthStateChanged } from "firebase/auth";
// redux
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import SubscribeScreen from "./screens/Subscribe/SubscribeScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/subscribe" element={<SubscribeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
