import React from "react";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bcolor: false
    };
  }

  handelChange = e => {
    if (e.target.value === "") {
      this.setState({
        bcolor: false
      });
    } else {
      this.setState({
        bcolor: true
      });
    }
  };

  render() {
    const { playname } = this.props;
    const { bcolor } = this.state;
    return (
      <div style={{ marginTop: "50px" }}>
        <h2 style={{ color: "#bfbfbf" }}>{playname}</h2>
        <input
          style={{
            width: "300px",
            height: "40px",
            fontSize: "20px",
            border: "0.3px solid #bfbfbf"
          }}
          placeholder="github用户名"
          onChange={this.handelChange}
        />
        <button
          style={{
            width: "150px",
            height: "40px",
            marginLeft: "20px",
            color: "#bfbfbf",
            fontSize: "20px",
            backgroundColor: bcolor === true ? "black" : "transparent",
            border: "1px solid #bfbfbf",
            borderRadius: "8px"
          }}
          type="button"
        >
          提交
        </button>
      </div>
    );
  }
}
export default Player;
