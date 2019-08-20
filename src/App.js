import React, { Component } from 'react';
import './App.css';
import TrendingMovie from './Component/Trending/Trending';
import PopularMovies from './Component/Popular/popularMovies';
import axios from 'axios';

import {Redirect} from "react-router-dom";

import Navigation from './Component/Navigation.jsx';

import SearchResult from './Component/SearchResult/searchResult';



const API_KEY = "https://api.themoviedb.org/3/trending/movie/day?api_key=eb943fe6e6cc6c36c7ebe8c5ea810bac";


class App extends Component {

    state= {
        movies: []
    };

    componentWillMount() {
        axios.get(API_KEY)
            .then(response=>{
                this.setState({
                    movies: response.data.results
                });
                console.log(this.state.movies)
            })
            .catch(err=>{
                console.log(err);
            })
    }


    render() {
    return (
      <div>
          <Navigation />
          <TrendingMovie movies={this.state.movies}/>
          <PopularMovies />
      </div>   
    );
  }
}
export default App;
