import React from "react";
import Menu from "./Menu";
import Content from "./Content";

class Pop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "stars:>1"
    };
  }

  onClick = query => {
    this.setState({
      query
    });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <Menu onClick={this.onClick} current={query} />
        <Content query={query} />
      </>
    );
  }
}
export default Pop;
