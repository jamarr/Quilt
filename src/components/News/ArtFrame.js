import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: block;
  width: 300px;
  height: 300px;
  position: relative;
  margin: 5px;
  border-radius: 3px;
  background-color: blue;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  transition: all 300ms;
  :hover {
    transform: scale(1.05);
    transition: all 300ms;
  }
  transition: all 300ms;

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
  }

  .source {
    padding: 5px;
    border: 1px solid white;
    border-radius: 3px;
  }
`;

const P = styled.p`
  background-color: ${props => props.color};
  text-align: left;
  padding: 30px 10px;
  height: 100%;
  line-height: 2em;
  text-align: center;
  border-radius: 3px;
`;

const ArtFrame = props => {
  const { item, savedItem } = props;
  return (
    <Card img={item.urlToImage} color="blue">
      <a href={item.url} target="">
        <P color="#ff009996">
          {item.title} <br />
          <span className="source">{item.source.name}</span> <br />
          {item.publishedAt} <br />
        </P>
      </a>
      {/* <button onClick={() => savedItem(item)}>Save Article</button> */}
    </Card>
  );
};

export default ArtFrame;
