import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Content from "./pages/Content.jsx";

import "./App.css";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/flyweight"
                element={<Content division="flyweight" />}
            />
            <Route
                path="/bantamweight"
                element={<Content division="bantamweight" />}
            />
            <Route
                path="/featherweight"
                element={<Content division="featherweight" />}
            />
            <Route
                path="/lightweight"
                element={<Content division="lightweight" />}
            />
            <Route
                path="/welterweight"
                element={<Content division="welterweight" />}
            />
            <Route
                path="/middleweight"
                element={<Content division="middleweight" />}
            />
            <Route
                path="/lightheavyweight"
                element={<Content division="lightheavyweight" />}
            />
            <Route
                path="/heavyweight"
                element={<Content division="heavyweight" />}
            />
        </Routes>
    );
};

export default App;
