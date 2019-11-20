import React from "react";

const ulstyle = {
  listStyleType: "none",
  display: "flex",
  alignContent: "center",
  lineHeight: "80px",
  width: "150px",
  justifyContent: "space-around"
};
class Nav extends React.Component {
  render() {
    const { current, oncurClick } = this.props;
    const alist = [
      {
        title: "热门项目",
        curquery: "pop"
      },
      {
        title: "battle",
        curquery: "battle"
      }
    ];
    const list = alist.map((item, key) => (
      <li key={key}>
        <a
          href="#"
          style={{
            color: current === item.curquery ? "red" : "black",
            textDecoration: "none",
            fontSize: "20px",
            display: "inline-block",
            width: "100%"
          }}
          onClick={() => oncurClick(item.curquery)}
        >
          {item.title}
        </a>
      </li>
    ));
    return <ul style={ulstyle}>{list}</ul>;
  }
}
export default Nav;
