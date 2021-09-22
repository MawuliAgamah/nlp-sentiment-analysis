import requests 
import pandas as pd 
import json


def get_reddit(subreddit,listing,limit,timeframe):
    try:
        base_url = f'https://www.reddit.com/r/{subreddit}/{listing}.json?limit={limit}&t={timeframe}'
        # base_url = f'https://www.reddit.com/search/?q={subreddit}'
        request = requests.get(base_url, headers = {'User-agent': 'yourbot'})
    except:
        print('An Error Occured')
    return request.json()

def subreddit_cleaner_to_json(subreddits):

  df_subreddits = pd.DataFrame()

  for i in subreddits['data']['children']:
      df_subreddits = df_subreddits.append({'subreddit':i['data']['subreddit'],
      'title':i['data']['title'],'content':i['data']['selftext'],
      'url':i['data']['url']
      },ignore_index=True)

  df = df_subreddits.to_json(orient="table")
  parsed = json.loads(df)
  
  return(parsed)









