const request = require("request");
const cheerio = require("cheerio");

function scrape (cb) {
	request("https://www.vogue.com/?s=tech", function(err, res, body) {
		var $ = cheerio.load(body);
		var articles = [];
		$(".feed-card--info").each(function(i, element){
			var head = $(this).children(".feed-card--title").text().trim();
			var sum = $(this).children(".collection-list--image").text().trim();

			if(head && sum) {
				var headClean = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
				var sumClean = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

				var dataToAdd = {
					headline: headClean,
					summary: sumClean
				};
				articles.push(dataToAdd);
			}
		});
		cb(articles);
	});
};

module.exports = scrape;