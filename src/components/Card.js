import React from "react";

const istyle = {
  width: "20px"
};
const astyle = {
  textDecoration: "none",
  fontSize: "20px",
  color: "black"
};
const pstyle = {
  textAlign: " left",
  paddingLeft: "25px",
  lineHeight: "25px"
};
const spanstyle = {
  fontSize: "20px"
};
class Card extends React.Component {
  render() {
    const { index, card } = this.props;
    return (
      <div
        style={{
          backgroundColor: "#bfbfbf",
          padding: "15px 15px",
          width: "250px",
          textAlign: "center",
          marginTop: "15px"
        }}
      >
        <h1>#{index}</h1>
        <img src={card.owner.avatar_url} style={{ width: "150px" }} alt="" />
        <br />
        <a
          href={card.html_url}
          style={{ color: "red", fontSize: "25px", textDecoration: "none" }}
        >
          {card.owner.login}
        </a>
        <p style={pstyle}>
          <i className="fa fa-user" aria-hidden="true" style={istyle} />
          <a href={card.owner.html_url} style={astyle}>
            {card.owner.login}
          </a>
        </p>
        <p style={pstyle}>
          <i className="fa fa-star" aria-hidden="true" style={istyle} />
          <span style={spanstyle}>{card.stargazers_count} stars</span>
        </p>
        <p style={pstyle}>
          <i className="fa fa-code-fork" aria-hidden="true" style={istyle} />
          <span style={spanstyle}>{card.forks_count} forks</span>
        </p>
        <p style={pstyle}>
          <i
            className="fa fa-exclamation-triangle"
            aria-hidden="true"
            style={istyle}
          />
          <span style={spanstyle}>{card.open_issues_count} open issues</span>
        </p>
      </div>
    );
  }
}
export default Card;
