import React from "react";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  Twitter,
  LinkedIn,
  Github,
  Telegram,
} from "@material-ui/icons";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, NavLink, withRouter } from "react-router-dom";
import resumeData from "../../Utils/resumeData";
import CustomButton from "../Button/Button";
import "./Header.css";

function Header(props) {
  const pathName = props?.location?.pathName;
  return (
    <Navbar expand="lg" className="header" sticky="top">
      {/*Home link */}
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          {/*Resume link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          {/*Portfolio link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton
            text={"Hire Me"}
            icon={<Telegram className="appIcon" />}
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
