export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = window.location.origin + '/';
const clientId = "d1f1dff8922742839961a14abbdd419f"

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;