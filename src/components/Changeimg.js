import React from "react";

class Changeimg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChange: false
    };
  }

  componentDidMount() {}

  handleClick = () => {
    this.setState(state => ({ isChange: !state.isChange }));
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        style={{
          borderStyle: "none",
          backgroundColor: "transparent",
          outline: "none"
        }}
        type="button"
      >
        <i
          className={this.state.isChange ? "fa fa-moon-o" : "fa fa-lightbulb-o"}
          aria-hidden="true"
          style={{ width: "50px", fontSize: "50px" }}
        />
      </button>
    );
  }
}
export default Changeimg;
