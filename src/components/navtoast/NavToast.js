import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Nav from 'react-bootstrap/Nav';
import './NavToast.css';


function NavToast({semaine, lienpre, liensuv}) {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    return (
        <div className="nav-toast">

            <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    {/* <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                    /> */}
                    <small className="mr-auto"></small>
                    <strong>{semaine}</strong>
                </Toast.Header>
                <Toast.Body>Utilisez-moi pour naviguer {semaine}!</Toast.Body>
                <Nav defaultActiveKey={liensuv} as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href={lienpre}>Precédént</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href={liensuv}>Suivant</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Toast>

        </div>
    );
}

export default NavToast;