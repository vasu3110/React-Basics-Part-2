import React from "react";

function ErrorMessage({ msg, items }) {
  let errorMessage = items.length === 0 ? <h3>{msg}</h3> : null;

  return <div>{errorMessage}</div>;
}

export default ErrorMessage;
