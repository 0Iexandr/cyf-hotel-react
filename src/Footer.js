import React from "react";

function Footer(props) {
  return (
    <footer className="App-footer">
      <ul>
        {props.data.map((data, idx) => (
          <li key={idx}>{data}</li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
