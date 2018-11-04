import React, { Component } from 'react';
import ArtFrame from './ArtFrame';

const URL =
  'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=774beda1345847508da686c538fe6698';

class News extends Component {
  state = {
    news: [],
    itemSaved: new Set()
  };

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          news: data.articles
        });
      })
      .catch(error => console.log(error));
  }

  handleSaveItem = item =>
    this.setState({
      itemSaved: this.state.itemSaved.add(item)
    });

  renderItems = () => {
    return this.state.news.map((item, index) => (
      <div className="element-item red1 newsArticle news-box col-md-4 col-sm red1Link">
        <ArtFrame
          key={index}
          item={item}
          savedItem={item => this.handleSaveItem(item)}
        />
      </div>
    ));
  };

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
