// {
//   "categories": [

//   ],
//   "created_at": "2020-01-05 13:42:24.696555",
//   "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//   "id": "K2fjOVIlREK1J2nZdxQBEw",
//   "updated_at": "2020-01-05 13:42:24.696555",
//   "url": "https://api.chucknorris.io/jokes/K2fjOVIlREK1J2nZdxQBEw",
//   "value": "Chuck Norris was never aware of the filming of Walker Texas Ranger"
// }

export interface Joke {
  categories: string[];
  created_at: string;
  id: string;
  value: string;
}

export interface QueryResult {
  result: Joke[];
  total: number;
}
