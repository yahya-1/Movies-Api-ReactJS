import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const param = useParams();

  const [movie, setMovie] = useState([]);

  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=68872e502f091e2ab20f84d32c9107f4&language=ar`
    );
    setMovie(res.data);
  };

  useEffect(() => {
    getMovieDetails();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Row className="py-3 my-3 card-details justify-content-center">
        <Col className="col-8 col-md-3 d-flex justify-content-center mb-3 me-3">
          <img
            className="img-movie"
            src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
            alt=""
            style={{ objectFit: "fill" }}
          />
        </Col>
        <Col className="col-8 d-flex flex-column justify-content-center align-items-center mx-auto">
          <p className="card-text-details ">اسم الفيلم: {movie.title}</p>
          <span className="border-bottom"></span>
          <p className="card-text-details ">
            تاريخ الفيلم : {movie.release_date}
          </p>
          <span className="border-bottom"></span>
          <p className="card-text-details ">
            عدد المقيمين : {movie.vote_count}
          </p>
          <span className="border-bottom"></span>
          <p className="card-text-details ">التقييم : {movie.vote_average}</p>
        </Col>
      </Row>

      <Row className="py-3 my-3 card-story">
        <Col>
          <p className="card-text-title ">القصة: </p>
          <span className="border-bottom2"></span>
          <p className="card-text-story text-end px-2 mt-3">{movie.overview}</p>
        </Col>
      </Row>

      <Row className="py-3 my-3">
        <Col className="d-flex justify-content-center ">
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              عوده للرئيسيه
            </button>
          </Link>
          <a href={movie.homepage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              مشاهده الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </>
  );
}

export default MovieDetails;
