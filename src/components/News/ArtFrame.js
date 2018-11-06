import React from 'react';
import styled from 'styled-components';
import NewsImg from '../../assets/news.jpeg';

const Card = styled.div`
  display: block;
  width: 300px;
  height: 300px;
  position: relative;
  margin: 5px;
  border-radius: 3px;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  transition: all 300ms;
  :hover {
    transform: scale(1.05);
    transition: all ease-in-out 300ms;
  }
  transition: all ease-in-out 300ms;

  a {
    color: white;
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    :hover {
      text-decoration: none;
    }
  }

  button {
    position: absolute;
    bottom: 0px;
    right: 0px;
    font-size: 1.5em;
    background-color: #c8498b;
    padding-left: 12px;
    border: 1px solid #c8498b;
    border-radius: 3px 0px 0px 0px;
  }

  .source {
    padding: 5px;
    border: 1px solid white;
    border-radius: 3px;
  }
`;

const P = styled.p`
  background-color: ${props =>
    props.color === 'REPLUBLICAN'
      ? '#ff000080'
      : props.color === 'DEMOCRATIC'
        ? '#0000ff80'
        : '#27b06580'};
  text-align: left;
  padding: 30px 10px;
  height: 100%;
  line-height: 2em;
  border-radius: 3px;
  transition: all ease-in-out 300ms;
  :hover {
    background-color: #000000ad;
    transition: all ease-in-out 300ms;
  }

  span {
    background-color: ${props =>
      props.color === 'REPLUBLICAN'
        ? 'red'
        : props.color === 'DEMOCRATIC'
          ? 'blue'
          : 'green'};
  }
`;

const ArtFrame = props => {
  const { item, savedItem } = props;
  // If there isn't image
  if (item.urlToImage === null) item.urlToImage = NewsImg;
  return (
    <Card img={item.urlToImage}>
      <a href={item.url} target="">
        <P color={item.party}>
          <span color={item.party} className="source">
            {item.source.name}
          </span>{' '}
          <br />
          {item.title} <br />
        </P>
      </a>
      <button onClick={() => savedItem(item)}>💾</button>
    </Card>
  );
};

export default ArtFrame;
