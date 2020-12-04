export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "4b2d1f24fc774d7c8781c5e074aa2008";
export const clientSecret = "bf5e3eb7f33b4601a95608ca0bae6e30";
export const redirectUri = "http://localhost:3000/redirect";
export const scopes = [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative"
];