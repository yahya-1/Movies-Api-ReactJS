import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardMovie({ mov }) {
  return (
    <Col xs="10" sm="6" md="4" lg="3">
      <Link to={`/details/${mov.id}`}>
        <div className="card my-1">
          <img
            className="card__image"
            src={`https://image.tmdb.org/t/p/w500` + mov.poster_path}
            alt=""
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {mov.title}</p>
              <p>تاريخ الاصدار: {mov.release_date}</p>
              <p>عدد المقيمين: {mov.vote_count}</p>
              <p>التقييم: {mov.vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default CardMovie;
