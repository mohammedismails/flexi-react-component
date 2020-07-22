import React from 'react';
import Card from 'react-bootstrap/Card'
import './../App.css'

const Display = ({ name, place }) => {
    return (
        <div className="flexi">
            <Card bg='light' border="secondary" text='dark' style={{ width: '18rem' }}>
                <Card.Body>{name} {place}</Card.Body>
            </Card>
        </div>
    )
}

export default Display;