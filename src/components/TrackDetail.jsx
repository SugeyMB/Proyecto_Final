import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './TrackDetail.css'; // Importa tu archivo CSS

const TrackDetail = ({ track, onHide }) => {
  if (!track) return null;

  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton>
      <Modal.Title style={{ color: 'black' }}>{track.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="track-detail-body">
        <p>Artista: {track.artists.map(artist => artist.name).join(', ')}</p>
        <p>Álbum: {track.album.name}</p>
        <p>Fecha de lanzamiento: {track.album.release_date}</p>
        <img src={track.album.images[0].url} alt={track.name} className="img-fluid mb-3" />
        {track.preview_url && (
          <div>
            <audio controls>
              <source src={track.preview_url} type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cerrar</Button>
        <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          <Button variant="success">Abrir en Spotify</Button>
        </a>
      </Modal.Footer>
    </Modal>
  );
};

export default TrackDetail;
