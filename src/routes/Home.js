import React from "react";
import axios from "axios"; // data를 'fetch'를 통해 받아와야 하는데 axios는 대표적인 data fetching layer 같은 라이브러리
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  // STATE를 통해 동적으로 변수 값을 바꿔(==데이터를 불러올 수 도 갱신할 수 도 있어!)
  state = {
    isLoading: true,
    movies: [],
  };

  // 비동기 함수, 기다려야 해
  getMovies = async () => {
    let newDate = new Date();
    let date = (newDate.getDate() - 1).toString();
    let month = (newDate.getMonth() + 1).toString();
    let year = newDate.getFullYear().toString();

    if (date.length === 1) {
      date = "0" + date;
    }
    if (month.length === 1) {
      month = "0" + month;
    }

    let yesterday = year + month + date;

    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );

    const {
      data: {
        boxOfficeResult: { dailyBoxOfficeList },
      },
    } = await axios.get(
      // "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
      "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20210211"
    );

    console.log(dailyBoxOfficeList);
    // movies:movies 인데 이름이 같아서 movies로 사용한다.
    this.setState({ movies, isLoading: false }); // setState()는 state 값을 변경해 == render을 다시 실행
  };

  // == render()가 끝나면 == mount 되면 실행
  async componentDidMount() {
    this.getMovies();
  }

  render() {
    // class React.Component는 render를 갖고 render를 통해 DOM을 만들어 HTML에 그린다.
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
