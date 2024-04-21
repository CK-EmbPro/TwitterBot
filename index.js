const Twit = require('twit')
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config();


const api = new Twit({
  consumer_key: process.env.twitterConsumerKey,
  consumer_secret: process.env.twitterConsumerSecret,
  access_token: process.env.twitterAccessToken,
  access_token_secret: process.env.twitterAccessTokenSecret,
});

const openaiApiKey = process.env.openaiApiKey;


// Step 4: Search for tweets using the Twitter API

const query = 'javascript';
  const maxTweets = 100;

  const { data: searchResults } = await api.get('search/tweets', {
    q: query,
    count: maxTweets
  });
  console.log(`Found ${searchResults.statuses.length} tweets. Generating comments...`);

// Step 5: Generate comments using OpenAI API


  const { data: response } = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      model: "text-davinci-003",
      prompt: `Comment on this tweet: "${tweet.text}", the reply to this tweet must be like i am writing it and also include some emoji that matches the generated text`,
      max_tokens: 70,
      temperature: 0.5,
      top_p: 1,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiApiKey}`,
      },
    }
  );
//   Step 6: Post the generated comment as a reply to the tweet

  
  const { data: postResponse } = await api.post("statuses/update", {
    status: `@${tweet.user.screen_name} ${comment}`,
    in_reply_to_status_id: tweet.id_str,
  });
  console.log(`Comment posted: ${postResponse.text}`);

//   Step 7: Delay each iteration for 30 minutes

  
  await new Promise((resolve) => setTimeout(resolve, 30 * 60 * 1000));

