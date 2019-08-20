import React,{Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import styles from '../Popular/popularMovies.css';
import Navigation from '../Navigation';

class SearchResult extends Component{

    state={
        result: []
    };

    componentWillMount() {
        const title =  this.props.location.state.item;
        this.setState({
            result: title
        })
    }


    render(){
        return(
            <div>
                <Navigation/>
                <div className="container">
                    <div className="row" id={styles.row}>
                        <h3 className="col-12 text-left" id={styles.headText}>Search results for {this.state.result.movieName} </h3>
                        {this.state.result.map((movies)=>(
                            <Link to={{pathname:`../movieHome/${movies.id}`,
                                state: { item: movies.id }
                            }}>
                                <div key={movies.id} className="col-sm-2-8" >
                                    <div id={styles.imgBox}>
                                        <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} width="100%" height="auto" alt={movies.title} />
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
            </div>

        )
    }
};

export default SearchResult;