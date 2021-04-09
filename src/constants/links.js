import React from "react";
import { Link } from "gatsby";
const data = [
  {
    id: 1,
    text: "ICO",
    url: "/",
  },
  {
    id: 2,
    text: "Team",
    url: "/#Team",
  },
  {
    id: 3,
    text: "Contact",
    url: "/#Contact",
  },
];

const tempLinks = data.map((link) => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  );
};
