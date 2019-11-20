import React from "react";
import Header from "./Header";
import Pop from "./Pop";
import Battle from "./Battle";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* query: 'stars:>1', */
      curquery: "pop"
    };
  }

  /*     onClick=(query) => {
      this.setState({
        query,
      });
    } */

  oncurClick = curquery => {
    this.setState({
      curquery
    });
  };

  render() {
    const { curquery } = this.state;
    return (
      <>
        <Header oncurClick={this.oncurClick} curpage={curquery} />
        {curquery === "pop" ? <Pop /> : <Battle />}
        <Footer />
      </>
    );
  }
}
export default App;
