import React from "react";

import "./styles.css";

export const Button = ({ children, onClick }) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);
