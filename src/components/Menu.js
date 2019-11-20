import React from "react";

const navstyle = {
  justifyContent: "space-around",
  width: "30%",
  display: "flex",
  listStyleType: "none",
  fontSize: "25px",
  margin: "0 auto"
};
class Menu extends React.Component {
  render() {
    const { onClick, current } = this.props;
    const links = [
      {
        title: "ALL",
        query: "stars:>1"
      },
      {
        title: "Javascript",
        query: "stars:>1+language:javascript"
      },
      {
        title: "Ruby",
        query: "stars:>1+language:ruby"
      },
      {
        title: "Java",
        query: "stars:>1+language:java"
      },
      {
        title: "CSS",
        query: "stars:>1+language:css"
      }
    ];
    const list = links.map((item, key) => (
      <li key={key}>
        <a
          href="#"
          style={
            current === item.query
              ? { color: "red", textDecoration: "none" }
              : { color: "black", textDecoration: "none" }
          }
          onClick={() => onClick(item.query)}
        >
          {item.title}
        </a>
      </li>
    ));
    return <ul style={navstyle}>{list}</ul>;
  }
}
export default Menu;
