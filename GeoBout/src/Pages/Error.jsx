import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import "./Error.css";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="error-page">
      <div className="error-card">
        <h1>Oops!</h1>
        <p className="error-message">
          {error?.statusText || error?.data || "Something went wrong"}
        </p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default Error;
