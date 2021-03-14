import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navigation.css';
import Path from '../../path';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="light" className="navigation">
            <div className="custom-font">
                <Navbar.Brand href={Path.ACCUEIL}>Carnet de bord</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav mr-auto">
                <Nav className="nav">
                    <NavDropdown title="Réflexion (a)" id="collasible-nav-dropdown">
                        <NavDropdown.Item href={Path.SEM8}>Réflexion Semaine 8</NavDropdown.Item>
                        <NavDropdown.Item href={Path.SEM9}>Réflexion Semaine 9</NavDropdown.Item>
                        <NavDropdown.Item href={Path.SEM10}>Réflexion Semaine 10</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Application (b)" id="collasible-nav-dropdown">
                        <NavDropdown.Item className="disabled" href={Path.SEM8APP}>Application Semaine 8</NavDropdown.Item>
                        <NavDropdown.Item href={Path.SEM9APP}>Application Semaine 9</NavDropdown.Item>
                        <NavDropdown.Item href={Path.SEM10APP}>Application Semaine 10</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Paragraphe (c)" id="collasible-nav-dropdown">
                        <NavDropdown.Item className="disabled" href={Path.SEM8PARA}>Paragraphe Semaine 8</NavDropdown.Item>
                        <NavDropdown.Item href={Path.SEM9PARA}>Paragraphe Semaine 9</NavDropdown.Item>
                        <NavDropdown.Item href={Path.SEM10PARA}>Paragraphe Semaine 10</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Matériels Supplémentaires (d)" id="collasible-nav-dropdown">
                        <NavDropdown.Item className="disabled" href={Path.SEM8MATSUP}>Matériels Supplémentaires Semaine 8</NavDropdown.Item>
                        <NavDropdown.Item href={Path.SEM9MATSUP}>Matériels Supplémentaires Semaine 9</NavDropdown.Item>
                        <NavDropdown.Item href={Path.SEM10MATSUP}>Matériels Supplémentaires Semaine 10</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="right-bar">
                    <Nav.Link href={Path.GITHUBPROJ}>Development Information (Link to Github)</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;