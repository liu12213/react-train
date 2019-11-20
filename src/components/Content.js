import React from "react";
import axios from "axios";
/* import InfiniteScroll from 'react-infinite-scroller'; */
import Loading from "./Loading";
import Card from "./Card";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      repos: []
    };
  }

  componentDidMount() {
    this.search();
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.search();
    }
  }

  search = async () => {
    const { query } = this.props;
    this.setState({
      isLoading: true
    });
    const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories`;
    const res = await axios.get(url);
    this.setState({
      repos: res.data.items,
      isLoading: false
    });
  };

  render() {
    const { repos, isLoading } = this.state;
    const list = repos.map((item, key) => (
      <Card key={key} index={key + 1} card={item} />
    ));
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        {isLoading ? <Loading /> : list}
      </div>
    );
  }
}
export default Content;
