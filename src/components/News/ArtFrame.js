import React from 'react';
import styled from 'styled-components';
import NewsImg from '../../assets/news.jpeg';
import BtnSaved from '../UI/BtnSaved';
import Emoji from '../UI/Emoji';

const Card = styled.div`
  position: relative;

  width: 300px;
  height: 200px;

  margin: 5px;
  border-radius: 3px;

  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  :hover {
    transform: scale(1.03);
    transition: all ease-in-out 300ms;
  }

  a {
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
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
  padding: 30px 10px;
  height: -webkit-fill-available;
  line-height: 2em;
  border-radius: 3px;
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
      <BtnSaved onClick={() => savedItem(item)}>
        <Emoji children="💾" />
      </BtnSaved>
    </Card>
  );
};

export default ArtFrame;
