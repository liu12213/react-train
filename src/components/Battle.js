import React from "react";
import Player from "./Player";

class Battle extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", padding: "20px" }}>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>用法说明</h1>
        <ul
          style={{
            display: "flex",
            width: "100%",
            listStyle: "none",
            justifyContent: "space-around",
            marginTop: "40px",
            flexWrap: "wrap"
          }}
        >
          <li style={{ padding: "40px", textAlign: "center", width: "200px" }}>
            <p style={{ fontSize: "20px" }}>输入两个Github用户</p>
            <i
              className="fa fa-user"
              aria-hidden="true"
              style={{ fontSize: "150px", color: "orange" }}
            />
          </li>
          <li style={{ padding: "40px", textAlign: "center", width: "200px" }}>
            <p style={{ fontSize: "20px" }}>战斗</p>
            <i
              className="fa fa-fighter-jet"
              aria-hidden="true"
              style={{ fontSize: "150px" }}
            />
          </li>
          <li style={{ padding: "40px", textAlign: "center", width: "200px" }}>
            <p style={{ fontSize: "20px" }}>获胜者</p>
            <i
              className="fa fa-trophy"
              aria-hidden="true"
              style={{ fontSize: "150px", color: "yellow" }}
            />
          </li>
        </ul>
        <h1 style={{ textAlign: "center", marginTop: "150px" }}>玩家</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            flexWrap: "wrap"
          }}
        >
          <Player playname="Player One" />
          <Player playname="Player Two" />
        </div>
      </div>
    );
  }
}
export default Battle;
