import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    // props에 state 항목이 없을 때 == data가 없을 때
    if (location.state == undefined) {
      history.push("/"); // redirect() == '/'로 다시 이동한다.
    }
  }
  render() {
    // Link를 통해 페이지 이동하면 props는 기본으로 받아와
    const { location } = this.props;
    if (location.state) {
      return (
        <section className="container">
          <div className="detail_container">
            <span>{location.state.title}</span>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
