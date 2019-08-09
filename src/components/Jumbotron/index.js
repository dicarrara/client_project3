import React from "react";
import "./style.css";

function Jumbotron({ children }) {
    return (
        <div className="jumbotron jumbotron-fluid d-flex">
            <div className="container text-center">
                {children}
            </div>
        </div>
    );
}

export default Jumbotron;