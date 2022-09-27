import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Navbar,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import { useDispatch } from "react-redux";
import { getAllMovie, getMovieSearch } from "../redux/action/moviesAction";

function NavBar() {
  const onSearch = (word) => {
    search(word);
  };

  const dispatch = useDispatch();

  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovie());
    } else {
      dispatch(getMovieSearch(word));
    }
  };
  return (
    <Row className="nav-style w-100 m-0">
      <Navbar expand="lg">
        <Container className="p-2">
          <Col className="col-2 col-lg-1">
            <Navbar.Brand className="w-100 m-0" href="/">
              <img
                src={logo}
                width="30"
                height="30"
                className="logo d-inline-block p-2"
                alt=""
              />
            </Navbar.Brand>
          </Col>

          <Col className="col-10 col-lg-11">
            <InputGroup className="search" dir="ltr">
              <Button
                className="butt "
                variant="outline-secondary"
                id="button-addon1"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
              <Form.Control
                onChange={(e) => onSearch(e.target.value)}
                className="text-end"
                placeholder="ابحث"
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Container>
      </Navbar>
    </Row>
  );
}

export default NavBar;
