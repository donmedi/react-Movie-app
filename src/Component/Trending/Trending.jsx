import React from 'react';
import styles from './trendStyle.css';
import Slick from 'react-slick';
import { Link } from "react-router-dom";


const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
};

const TrendingMovie = (props) => {
    return (
        <div className="container">
            <Slick {...settings}>
                {props.movies.map((item) => (
                    <div key={item.title} className={styles.trendContainer}>
                        <Link to={{
                            pathname: `../movieHome/${item.id}`,
                            state: { item: item.id }
                        }}>
                            <div className={styles.imagesTrend}>
                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} width="100%"
                                    height="auto" alt={item.title} />
                                <div className={styles.imageText}>
                                    <p className={styles.imageText2}>{item.original_title}</p>
                                    <small className={styles.imageText3}> {item.release_date.substring(0, 4)} </small>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
                )}
            </Slick>
        </div>

    )
};

export default TrendingMovie;