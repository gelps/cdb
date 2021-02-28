import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertMobile() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="info" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>ATTENTION:</Alert.Heading>
                <p>
                    J'ai éssayé de le rendre compatible avec les mobiles mais il est préférable de le voir sur un ordinateur.
                </p>
            </Alert>
        );
    }
    return <div></div>;
}


export default AlertMobile;