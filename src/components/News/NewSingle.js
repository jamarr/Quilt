import React from 'react';
import ArtFrame from './ArtFrame';





class newSingle extends React.Component {
  constructor(props) {
    super(props);
    
    console.log(this.props.item);
  }
  render() {
    return (
      <div className="element-item red1 newsArticle news-box col-md-4 col-sm red1Link">
      <ArtFrame item={this.props.item} />
      </div>
    );
  }
}





export default newSingle;


