import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import styles2 from "./movieHome.css";
import styles from "./Popular/popularMovies.css";


const API_KEY = `https://api.themoviedb.org/3/trending/movie/week?api_key=eb943fe6e6cc6c36c7ebe8c5ea810bac`;

class MovieHome extends Component {
    state = {
        currentMovie: [],
        videosList: [],
        similarVideos: []
    };

    componentDidMount() {
        const title = this.props.location.state.item;
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${title}?api_key=eb943fe6e6cc6c36c7ebe8c5ea810bac&append_to_response=videos`
            )
            .then(response => {
                this.setState({
                    currentMovie: response.data
                });
                console.log(this.state.currentMovie);
            })
            .catch(err => {
                console.log(err);
            });

        axios
            .get(
                `https://api.themoviedb.org/3/movie/${title}/videos?api_key=eb943fe6e6cc6c36c7ebe8c5ea810bac`
            )
            .then(response => {
                this.setState({
                    videosList: response.data.results[0]
                });
                console.log(this.state.videosList);
            })
            .catch(err => {
                console.log(err);
            });

        axios
            .get(
                `https://api.themoviedb.org/3/movie/${title}/similar?api_key=eb943fe6e6cc6c36c7ebe8c5ea810bac&page=1`
            )
            .then(response => {
                this.setState({
                    similarVideos: response.data.results
                });
                console.log(this.state.similarVideos);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const movies = this.state.currentMovie;
        const videoList = this.state.videosList;
        return (
            <div>
                <Navigation />
                <div className="container" id={styles2.moviePage}>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className={styles2.movieImage}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                                    alt="img"
                                    className="rounded float-left"
                                />
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className={styles2.mainText}>
                                <h3>{movies.original_title}</h3>
                                {(movies.genres || []).map(item => (
                                    <small key={item.id}> {item.name} </small>
                                ))}
                                <h4>
                                    <b>Overview </b>
                                </h4>
                                <p>{movies.overview}</p>
                                <p>
                                    <b>RunTime: </b> {movies.runtime} minutes{" "}
                                </p>
                                <p>
                                    <b>Release Date: </b> {movies.release_date}
                                </p>
                                <p>
                                    <b>IMDB Rating: </b> {movies.vote_average}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row" id={styles2.videoPage}>
                        <h4 className="col-12">Watch Trailer</h4>
                        <div key={videoList.id} className="col-sm-12">
                            <iframe
                                className="embed-responsive-item"
                                src={`https://www.youtube.com/embed/${videoList.key}`}
                                width="480px"
                                height="300px"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h3
                        className="col-12 text-center"
                        id={styles.headText}
                        style={{ margin: 40, fontWeight: "bold" }}
                    >
                        Similar movies{" "}
                    </h3>
                    <div className="row justify-content-center" id={styles.row}>
                        {this.state.similarVideos.map(movies => (
                            <Link
                                to={{
                                    pathname: `../movieHome/${movies.id}`,
                                    state: { item: movies.id }
                                }}
                            >
                                <div key={movies.id} className="col-sm-3">
                                    <div id={styles.imgBox}>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${
                                                movies.poster_path
                                                }`}
                                            width="100%"
                                            height="auto"
                                            alt="img"
                                        />
                                        <div className={styles.imgText}>
                                            <p className={styles.imgText1}>{movies.title}</p>
                                            <p className={styles.imgText2}>
                                                {movies.release_date.substring(0, 4)}
                                            </p>
                                        </div>

                                        <div className={styles.backText}>
                                            <h5>{movies.title}</h5>
                                            <p>
                                                {movies.overview.length < 150
                                                    ? `${movies.overview}`
                                                    : `${movies.overview.substring(0, 200)}...`}{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieHome;
