export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = window.location.origin + "/";
const clientId = process.env.REACT_APP_CLIENT_ID;

// add value to scope for different permissions for eg: "user-read-currently-playing","user-top-read",
const scopes = [];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
