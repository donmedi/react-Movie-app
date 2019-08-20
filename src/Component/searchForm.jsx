import React, { Component } from 'react';
import styles from './searchForm.css';
import { Redirect } from "react-router-dom";



class SearchForm extends Component {

    state = {
        searchMovies: []
    };

    getMovies = async (e) => {
        const movieName = e.target.elements.movieName.value;
        e.preventDefault();
        const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=eb943fe6e6cc6c36c7ebe8c5ea810bac&query=${movieName}`);
        const data = await api_call.json();
        this.setState({ searchMovies: data.results });
        console.log(data);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.getMovies}>
                    <div id={styles.formInline} className="form-inline  align-items-center">
                        <div className="col-12">
                            <input autoComplete="off" id={styles.formControl} className="form-control" type="text" name="movieName" />
                            <button id={styles.btn} className="btn"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </form>

                {this.state.searchMovies.length > 0 &&
                    <Redirect
                        to={{
                            pathname: `../searchResult`,
                            state: { item: this.state.searchMovies }
                        }}
                    />}
            </div>
        )
    }
}


export default SearchForm;