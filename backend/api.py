
from flask import Flask, session , redirect , url_for, request
import flask
from flask.json import jsonify
from flask_restful import Api, Resource 
import requests 
import json
import pandas as pd
from requests.api import request
#from requests.models import Request
import scrapeSubreddits





app = Flask(__name__)
app.config["SECRET_KEY"] = "OCML3BRawWEUeaxcuKHLpw"
api = Api(app)

#Take the searched term that the user searches
@app.route('/subreddit_search',methods = ['POST'])
def take_search():
  data =  flask.request.get_json()
  session['userSearch'] = data
  print (data)
  #print(session['userSearch']['searchTerm'])
  return jsonify(data)




@app.route('/getReddit',methods = ['GET'])
def get():
  search = session.get('userSearch',None)
  #search = json.dump(search)
  limit = 100
  timeframe = 'day' 
  listing = 'top' 
  r_cryptoCurrency = scrapeSubreddits.get_reddit(search['searchTerm'],listing,limit,timeframe)
  #r_cryptoCurrency = scrapeSubreddits.get_reddit('CryptoMarkets',listing,limit,timeframe)
  #r_cryptoMarkets = scrapeSubreddits.get_reddit('CryptoMarkets',listing,limit,timeframe)
  #r_ethtrader = scrapeSubreddits.get_reddit('Ethtrader',listing,limit,timeframe)
  #r_bitmarkets = scrapeSubreddits.get_reddit('bitcoinmarkets',listing,limit,timeframe)
   # subreddits_df = [r_cryptoCurrency,r_cryptoMarkets,r_ethtrader,r_bitmarkets] 
  subreddits_df = [r_cryptoCurrency] 
  data = scrapeSubreddits.subreddit_cleaner_to_json(subreddits_df)
  return data


  
# class getRedditPosts(Resource):
  
#   def get(self):
#     limit = 100
#     timeframe = 'day' 
#     listing = 'top' 
#     user_search = flask.session['userSearch'] 
#     r_cryptoCurrency = scrapeSubreddits.get_reddit('CryptoCurrency',listing,limit,timeframe)
#     r_cryptoMarkets = scrapeSubreddits.get_reddit('CryptoMarkets',listing,limit,timeframe)
#     r_ethtrader = scrapeSubreddits.get_reddit('Ethtrader',listing,limit,timeframe)
#     r_bitmarkets = scrapeSubreddits.get_reddit('bitcoinmarkets',listing,limit,timeframe)
#     subreddits_df = [r_cryptoCurrency,r_cryptoMarkets,r_ethtrader,r_bitmarkets] 

#     data = scrapeSubreddits.subreddit_cleaner_to_json(subreddits_df)
#     return data







# api.add_resource(getRedditPosts,"/getReddit")


if __name__ == '__main__':
    app.run(debug=True)



