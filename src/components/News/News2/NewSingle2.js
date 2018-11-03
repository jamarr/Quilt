import React from 'react';
const styles = {
  color: 'black',
}
const styleB1 = {
  color: 'orange',
  background:'blue'
}

const NewSingle = ({item}) => (
  <div style={styles} className="col-3">
    <a href={item.url}>
      <div className="card">
        <div className="card-image">
          <img src={item.urlToImage} alt={item.title}/>
          <span className='card-title'>{item.source.name}</span>
        </div>
      </div>
    </a>
  </div>
);




export default NewSingle;
