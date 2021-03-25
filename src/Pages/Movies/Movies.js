import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../../Genres/Genres";
import SingleContent from "../../SingleContent/SingleContent";
import CustomPagination from "../../Pagination/customPagination";
import useGenres from "../../hooks/useGenre";
const Movies = () => {
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const genreforURL = useGenres(selectedGenres);
    // console.log(selectedGenres);
  
    const fetchMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=bea1dd6afc2c0a31dc67846332818a13&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
    };
  
    useEffect(() => {
      window.scroll(0, 0);
      fetchMovies();
      // eslint-disable-next-line
    }, [genreforURL, page]);
  
    return (
      <div>
        <span className="pageTitle"></span>
        <Genres
          type="movie"
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
        <div className="trending">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type="movie"
                vote_average={c.vote_average}
              />
            ))}
        </div>
        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        )}
      </div>
    );
  };
  
  export default Movies;