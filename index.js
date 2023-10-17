require("dotenv").config();
const rwClient = require("./twitterClient");
const axios = require("axios");
const cron = require("cron").CronJob;
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const tweet = async () => {
  try {
    const options = {
      method: "POST",
      url: "https://quotel-quotes.p.rapidapi.com/quotes/random",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "24736236demshefa578f021de88ep126b89jsn2e4a4fb05a68",
        "X-RapidAPI-Host": "quotel-quotes.p.rapidapi.com",
      },
      data: {
        topicIds: [12, 100],
      },
    };
    const response = await axios.request(options);
    console.log(response.data);
    await rwClient.v2.tweet(
      `${response.data.quote}\n\n -${response.data.name}`
    );
  } catch (e) {
    console.error(e);
  }
};

// Set the cron expression to run at 7:00 AM every day
const job = new cron("0 7 * * *", () => {
  console.log("Job running");
  tweet();
});

job.start();

app.get("/", (req, res) => {
  res.send("Hello, this is your Express GET route!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
