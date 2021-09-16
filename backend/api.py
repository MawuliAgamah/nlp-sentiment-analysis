
from flask import Flask
import flask
from flask_restful import Api, Resource 
import requests 
import json
import pandas as pd
from requests.api import request
#from requests.models import Request
import scrapeSubreddits





app = Flask(__name__)

api = Api(app)

class getRedditPosts(Resource):
  
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


#Take the searched term that the user searches
@app.route('/subreddit_search',methods = ['POST'])
def take_search():
  data =  flask.request.get_json()
  print(data)
  return data





api.add_resource(getRedditPosts,"/getReddit")




if __name__ == "__main__":
  app.run(debug=True)



