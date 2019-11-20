import React from "react";

const lodingistyle = {
  display: "inline-block",
  width: "50px",
  height: "50px",
  background: "#399",
  margin: "0 2px",
  transform: "scaleY(0.4)",
  animation: "load 1.2s infinite"
};
class Loading extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "800px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div>
          <i style={lodingistyle} />
          <i style={lodingistyle} />
          <i style={lodingistyle} />
          <i style={lodingistyle} />
          <i style={lodingistyle} />
        </div>
      </div>
    );
  }
}
export default Loading;
