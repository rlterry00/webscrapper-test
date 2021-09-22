const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

const url =
    "https://www.psychologytoday.com/us/therapists/african-american/nc/charlotte";

  
const scrapeData = async () => {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    console.log("Black Therapist in Charlotte:", pretty($(".result-name").text()));
} 
scrapeData();