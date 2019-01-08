# Quilt Project 2018

By color coding each news article Quilt informs users of news sources biases.

# Motivation

In a world where there are multiple news outlet sunbeknownst to the reader owned by large corporations like Amazon, propaganda, aditorial, the bias
go and set agendas often go unnoticed. With Quilt with set out to make those biases visually clear, by color coding each article readers can navigate through articles and knowingly understand the bias of the publication.

# Build Status

In development

# Tech/Framework Used

### Built with

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Mongo DB](https://www.mongodb.com/)
- [Express JS](https://expressjs.com/)
- [Stripe API](https://stripe.com/)
- [News API](https://newsapi.org/)

# Features

- Articles from multiple sources
- Publication biases are brought to the forefront
- Users can login and save articles

# Set Up

## Client Side

Add `.env` in `/client` folder with your personnal and private data

```
REACT_APP_NEWS_API_KEY=
REACT_APP_STRIPE_KEY=
```

## Server Side

Add `.env` in root folder with your personnal and private data

```
NODE_ENV=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
COOKIE_KEY=
MONGO_URI=
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
```

To run from root

```
npm install install
npm run dev
```

Client run on : http://localhost:3000  
Server run on : http://localhost:5000

# Credits

[@joshuaaguilar20](https://github.com/joshuaaguilar20)  
[@jamarr](https://github.com/jamarr)  
[@Wolfy64 ](https://github.com/Wolfy6)  
[@ClaudioBardales](https://github.com/ClaudioBardales)  
[@sugarsyntax](https://github.com/sugarsyntax)
