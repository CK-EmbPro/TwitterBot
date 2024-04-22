// Require the Client and auth modules from twitter-api-sdk
const { Client, auth } = require("twitter-api-sdk");

// Initialize auth client first
const authClient = new auth.OAuth2User({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  callback: "YOUR-CALLBACK",
  scopes: ["tweet.read", "users.read", "offline.access"],
});

// Pass auth credentials to the library client
const twitterClient = new Client(authClient);

// Now we can use the statuses.search method to search for tweets
const query = "javascript";
const maxResults = 10; // Number of results to fetch
twitterClient.tweets.search({ q: query, count: maxResults })
  .then((response) => {
    console.log("Search results:", response);
  })
  .catch((error) => {
    console.error("Error searching tweets:", error);
  });
