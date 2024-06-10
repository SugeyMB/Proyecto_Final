const CLIENT_ID = '6ec9177238d1431e8ccb1ce4400260c8';
const CLIENT_SECRET = 'b53c02d32bc547f09ba4c7f9d7b4aa7a';

const getToken = async () => {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    },
    body: 'grant_type=client_credentials'
  });
  
  const data = await result.json();
  return data.access_token;
};

export const searchTracks = async (query) => {
  const token = await getToken();
  const result = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token }
  });

  const data = await result.json();
  return data.tracks.items;
};

export const getTrackDetails = async (id) => {
  const token = await getToken();
  const result = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token }
  });

  const data = await result.json();
  return data;
};
