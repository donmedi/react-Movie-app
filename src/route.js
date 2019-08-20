import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import App from "./App";
import MovieHome from "./Component/movieHome"
import SearchResult from "./Component/SearchResult/searchResult"

const Router = () => {
    return(
        <BrowserRouter>  
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/movieHome/:id" exact component={MovieHome}  />
                <Route path="/searchResult" exact component={SearchResult} />
            </Switch>      
      </BrowserRouter> 
    )
};

export default Router;