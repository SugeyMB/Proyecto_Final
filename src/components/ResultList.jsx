import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './ResultList.css'; // Importa tu archivo CSS

const ResultList = ({ results, onSelect }) => {
  return (
    <Row xs={1} md={3} className="g-4">
      {results.map(track => (
        <Col key={track.id}>
          <Card className="result-card" onClick={() => onSelect(track.id)}>
            <Card.Img variant="top" src={track.album.images[0]?.url} alt={track.name} />
            <Card.Body>
              <Card.Title>{track.name}</Card.Title>
              <Card.Text>{track.artists.map(artist => artist.name).join(', ')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ResultList;
