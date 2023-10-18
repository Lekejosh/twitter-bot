# Twitter Bot Readme

This Twitter bot allows you to automatically post tweets on your Twitter account every morning at 8 AM. It uses Twitter API for posting tweets and the RapidAPI service to fetch quotes. To ensure the bot remains active and responsive, an external service is used to ping the base route every 5 minutes.

## Prerequisites

Before setting up and running the bot, you'll need the following:

- **Twitter Developer Account:** You should have a Twitter Developer account to obtain API keys for accessing Twitter's API.

- **RapidAPI Account:** Sign up for a RapidAPI account to get access to the quote API.

- **Node.js:** Make sure you have Node.js installed on your machine.

- **npm Packages:** The bot uses several npm packages, including `axios`, `cron`, `dotenv`, `twitter-api-v2`, and `express`. These packages need to be installed to run the bot.

## Setup

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Lekejosh/twitter-bot.git
   ```

2. Navigate to the project directory:

   ```bash
   cd twitter-bot
   ```

3. Install the required npm packages:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project directory with the following content, replacing the placeholders with your actual API keys and access tokens, check the `.env.sample` file:

   ```
   appKey=your-twitter-api-key
   appSecret=your-twitter-api-secret-key
   accessToken=your-twitter-access-token
   accessSecret=your-twitter-access-token-secret
   rapid_api=your-rapidapi-api-key
   ```

## Configuration

The bot is configured to post a tweet every day at 8 AM. You can customize the tweet content by modifying the `index.js` file in the project directory. The current implementation fetches a random quote from the RapidAPI service and posts it to your Twitter account.

## Running the Bot

To start the bot, run the following command:

```bash
npm start
```

The bot will automatically schedule tweets to be posted every morning at 8 AM.

## External Service Ping

To keep the bot active and prevent it from sleeping, you should set up an external service to ping the bot's base route every 5 minutes. This can be achieved using various online services or tools, such as statuscake, uptime robot or other monitoring services.


## RapidAPI Service for Quotes

This Twitter bot fetches quotes from the [QuoteL Quotes API on RapidAPI](https://rapidapi.com/skjaldbaka17/api/quotel-quotes/). To use this service, follow these steps:

1. Sign up for a RapidAPI account if you haven't already.

2. Visit the [QuoteL Quotes API](https://rapidapi.com/skjaldbaka17/api/quotel-quotes/) page on RapidAPI and obtain your API key.

3. Open your `.env` file and add your RapidAPI API key:

   ```env
   rapid_api=your-rapidapi-api-key
   ```

With your API key properly configured, the bot will be able to fetch quotes from the RapidAPI service and post them to your Twitter account as scheduled.

You can customize the quote-fetching logic in the `index.js` file to tailor the content and formatting of the tweets to your liking.

If you have any questions or run into issues, please refer to the RapidAPI documentation or reach out to their support for assistance with the QuoteL Quotes API.

## Disclaimer

Please be mindful of Twitter's API usage guidelines and respect RapidAPI's terms of service while using this bot. Unauthorized or excessive usage may result in account suspension or other penalties.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to customize and extend the bot as needed to suit your specific requirements. Enjoy your Twitter bot! 🚀