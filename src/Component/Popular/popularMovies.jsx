import React,{Component} from 'react';
import axios from 'axios';
import styles from './popularMovies.css';
import {Link} from "react-router-dom";

class PopularMovies extends Component{

    state={
        popularMovies: []
    };

    componentWillMount() {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=eb943fe6e6cc6c36c7ebe8c5ea810bac")
            .then(response =>{
                this.setState({
                    popularMovies: response.data.results
                })
            })
    }


    render(){
        return(
            <div className="container">
                <div className="row" id={styles.row}>
                    <h3 className="col-12 text-left" id={styles.headText}>Popular movies </h3>

                        {this.state.popularMovies.map((movies)=>(
                            <Link to={{pathname:`../movieHome/${movies.id}`,
                                state: { item: movies.id }
                            }}>
                                <div key={movies.id} className="col-sm-2-8" >
                                    <div id={styles.imgBox}>
                                        <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} width="100%" height="auto" />
                                        <div className={styles.imgText}>
                                            <p className={styles.imgText1}>{movies.title}</p>
                                            <p className={styles.imgText2}>{(movies.release_date.substring(0,4))}</p>
                                        </div>

                                        <div className={styles.backText}>
                                            <h5>{movies.title}</h5>
                                            <p>{movies.overview.length < 150 ? `${movies.overview}` :
                                                `${movies.overview.substring(0,200)}...`
                                            } </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        )
    }
};

export default PopularMovies;
