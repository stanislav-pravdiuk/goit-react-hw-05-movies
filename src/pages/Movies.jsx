import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import getMovies from 'services/fetchAPI';

function Movies() {

    const [movies] = useState([
        "movie1", "movie2", "movie3", "movie4"
    ]);
    
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get('movieId') ?? '';


    // useEffect
    //     < HTTP >

    const visibleMovies = movies.filter(movie => movie.includes(movieId))

    function updateQueryString(e) {
        if (e.target.value === '') {
            return setSearchParams({})
        }
        setSearchParams({movieId: e.target.value})
    };

    return (
        <div>
            <input
                type="text"
                value={movieId}
                onChange={updateQueryString}
            />
            <button onClick={() => getMovies()
                .then(el => { console.log(el) })
                .catch(error => { console.log(error) })
            }
            >change sp</button>
            <ul>
                {visibleMovies.map(movie => {
                    return <li key={movie}>
                        <Link state={{ from: location}} to={`${movie}`}>
                            {movie}
                        </Link>
                    </li>
                })}
            </ul>    
        </div>
    )
};

export default Movies;