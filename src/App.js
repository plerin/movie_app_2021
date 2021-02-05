import React from 'react';
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
      isLoading: true,
      movies : []
  };

  // 비동기 함수, 기다려야 해
  getMovies = async () => {
    // data fetching으로 받아와야 하는데 axiou는 data fetching하는 layer 같은 것
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies, isLoading: false});
  }

  async componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading..." : movies.map(movie => {
      console.log(movie);
      return <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}/>
    })}</div>
  }
}


export default App;
