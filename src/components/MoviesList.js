import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginateComponent from "./PaginateComponent";
import { getAllMovie } from "../redux/action/moviesAction";
import { useSelector, useDispatch } from "react-redux";
const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovie());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <Row className="justify-content-center align-items-center">
      {movies.length ? (
        movies.map((mov) => <CardMovie key={mov.id} mov={mov} />)
      ) : (
        <h3 className="text-center lh-lg">لا يوجد افلام...</h3>
      )}

      {movies.length ? <PaginateComponent /> : null}
    </Row>
  );
};

export default MoviesList;
