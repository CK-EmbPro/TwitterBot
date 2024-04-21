Twitter Bot with OpenAI API

This Twitter Bot project uses the OpenAI API to generate comments on new tweets based on their content. The bot will automatically search for relevant tweets and respond to them with generated comments.

Setup Prerequisites

Node.js installed on your machine
Twitter Developer Account with API keys
OpenAI API key

Installation

Clone the repository:
bash
Copy code
git clone https://github.com/your-username/twitter-bot.git
Navigate to the project directory:
bash
Copy code
cd twitter-bot
Install dependencies:
bash
Copy code
npm install
Create a .env file in the root directory:
makefile
Copy code

TWITTER_CONSUMER_KEY=Your_Twitter_Consumer_Key
TWITTER_CONSUMER_SECRET=Your_Twitter_Consumer_Secret
TWITTER_ACCESS_TOKEN=Your_Twitter_Access_Token
TWITTER_ACCESS_TOKEN_SECRET=Your_Twitter_Access_Token_Secret
OPENAI_API_KEY=Your_OpenAI_API_Key

Usage

To run the Twitter Bot, use the following command:

bash
Copy code
npm start

Features

Automatically searches for new tweets based on keywords.
Generates comments using the OpenAI API.
Responds to tweets with generated comments.
Configuration
keywords: Edit the config.js file to set the keywords for tweet searching.
commentLength: Adjust the desired length of generated comments.
Limitations
Twitter API rate limits may affect the bot's responsiveness.
OpenAI API usage limits apply.
Contribution
Contributions are welcome! Feel free to open an issue or submit a pull request.

