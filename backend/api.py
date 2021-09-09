
from flask import Flask
from flask_restful import Api, Resource 
import requests 
import pandas as pd 
import json
import scrapeSubreddits





app = Flask(__name__)
api = Api(app)


class redditDb(Resource):
  def get(self):

    limit = 100
    timeframe = 'day' 
    listing = 'top' 
    
    r_cryptoCurrency = scrapeSubreddits.get_reddit('CryptoCurrency',listing,limit,timeframe)
    r_cryptoMarkets = scrapeSubreddits.get_reddit('CryptoMarkets',listing,limit,timeframe)
    r_ethtrader = scrapeSubreddits.get_reddit('Ethtrader',listing,limit,timeframe)
    r_bitmarkets = scrapeSubreddits.get_reddit('bitcoinmarkets',listing,limit,timeframe)
    subreddits_df = [r_cryptoCurrency,r_cryptoMarkets,r_ethtrader,r_bitmarkets] 

    data = scrapeSubreddits.subreddit_cleaner_to_json(subreddits_df)
    return data



api.add_resource(redditDb,"/redditdb")

if __name__ == "__main__":
  app.run(debug=True)



