import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container" {...children}>
      <ul className="list-group-item">{children}</ul>
    </div>
  );
}

export function ListItem({ props, children }) {
  return <li className="list-group-item" {...props}>{children}</li>;
}

export function NavLink (props) {
  return (
    <li className="nav-item">
      <a className="nav-link" {...props}>{props.title}</a>
    </li>
  )
}

export function CardText({ children }) {
  return (
    <p className="card-text">{children}</p>
  )
}