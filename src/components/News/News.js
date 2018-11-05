import React, { Component } from 'react';
import ArtFrame from './ArtFrame';
import styled from 'styled-components';

const URL =
  'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=774beda1345847508da686c538fe6698';

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

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

  render() {
    return (
      <Wrapper>
        {this.state.news.map((item, index) => (
          <ArtFrame
            key={index}
            item={item}
            savedItem={item => this.handleSaveItem(item)}
          />
        ))}
      </Wrapper>
    );
  }
}

export default News;
