import React from "react";
import { useSelector } from "react-redux";

const SuccessScreen = () => {
  const user = useSelector((state) => state.signUp.user);

  return (
    <div>
      <h1>Success!</h1>
      {user && (
        <div>
          <p>Welcome, {user.username}!</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default SuccessScreen;