import React from "react";
import Nav from "./Nav";
import Changeimg from "./Changeimg";

class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "80px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Nav oncurClick={this.props.oncurClick} current={this.props.curpage} />
        <Changeimg />
      </div>
    );
  }
}
export default Header;
