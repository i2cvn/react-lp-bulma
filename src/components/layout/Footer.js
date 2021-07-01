import React from "react";

import myInfo from "../../data/myInfo";

export default function Footer(props) {
  return (
    <footer
      className="footer isGradBg is-color-blue"
      style={{ padding: "16px" }}
    >
      <div className="section-heading">
        <p>
          <span style={{ padding: "8px" }}>
            <img src={myInfo.logo} style={{ height: "40px" }} />
          </span>
          Built by <a href={myInfo.website}>{myInfo.name}</a>. All copyright
          reserved.
        </p>
        <hr />
      </div>
      <h4>
        <strong>Links</strong>
      </h4>
      <div style={{ width: "90%", margin: "auto" }}>
        <div className="columns">
          <div className="column">
            <ul>
              {myInfo.extraLinks.map((el) => (
                <li key={el.name}>
                  <a href={el.link || el.url}>{el.text || el.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
