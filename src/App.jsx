import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar.jsx';
import ResultList from './components/ResultList.jsx';
import TrackDetail from './components/TrackDetail.jsx';
import { searchTracks, getTrackDetails } from './api.js';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté importado
import './styles.css';
import spotifyLogo from './assets/logos--spotify.svg'; // Importa el logo

const App = () => {
  const [results, setResults] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleSearch = async (query) => {
    try {
      const tracks = await searchTracks(query);
      setResults(tracks);
      localStorage.setItem('lastSearch', query);
    } catch (error) {
      Swal.fire('Error', 'No se pudieron obtener los resultados', 'error');
    }
  };

  const handleSelect = async (id) => {
    try {
      const track = await getTrackDetails(id);
      setSelectedTrack(track);
    } catch (error) {
      Swal.fire('Error', 'No se pudieron obtener los detalles de la pista', 'error');
    }
  };

  useEffect(() => {
    const lastSearch = localStorage.getItem('lastSearch');
    if (lastSearch) {
      handleSearch(lastSearch);
    }
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ color: '#1DB954' }}>
        <img src={spotifyLogo} alt="Spotify Logo" className="spotify-logo" />
      </h1>
      <SearchBar onSearch={handleSearch} />
      <ResultList results={results} onSelect={handleSelect} />
      {selectedTrack && <TrackDetail track={selectedTrack} onHide={() => setSelectedTrack(null)} />}
    </div>
  );
};

export default App;
