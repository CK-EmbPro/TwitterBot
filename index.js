const Twit = require('twit')
const axios = require('axios')

const twitterConsumerKey = "BCdNvq3OEKq6vFQ7JYaiQ2J1W";
const twitterConsumerSecret = "AZBHWalYfMbGmCHzWnGZWBDdtBqVdkuMHt1uIvGmDjpNhgu0Ti";
const twitterAccessToken = "1610011099675377665-T9RzOsBEt4FelXjZJxsav1YCJYE8mJ";
const twitterAccessTokenSecret = "EDunj8P1csVNhfRlvDgV94MIL4BCKByig94WK3Fz7qMb2";

const api = new Twit({
  consumer_key: twitterConsumerKey,
  consumer_secret: twitterConsumerSecret,
  access_token: twitterAccessToken,
  access_token_secret: twitterAccessTokenSecret,
});

const openaiApiKey = "sk-proj-5a5xGFTjLp4vlApm9vGBT3BlbkFJl0epv0oAacQMYtcegNb1";


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

