import React from 'react';

class ArtFrame extends React.Component {
  state = {
    itemSaved: []
  };

  handleSaveItem = item => {
    // console.log(item);
    // const newItem = this.state.itemSaved.push(item);
    // this.setState((state, item) => {
    //   return { itemSaved: [...state.itemSaved, ...item] };
    // });
    console.log(...this.state.itemSaved);
    console.log([...this.state.itemSaved, item]);
    this.setState(prevState => ({
      itemSaved: [...prevState.itemSaved, item]
    }));
    // this.setState({ itemSaved: [...this.state.itemSaved, item] });
  };
  // this.setState({ myArray: [...this.state.myArray, 'new value'] }) //simple value
  render() {
    // console.log('STATE itemSaved', this.state.itemSaved);
    return (
      <div>
        <a href={this.props.item.url} target="">
          <div className="card-image">
            <img src={this.props.item.urlToImage} alt="description" />
          </div>
          <div className="article-text text-left">
            <span style={{ fontSize: '22px' }} className="row">
              {this.props.item.title}
            </span>
            <span className="row">
              <p className="sourceDisplay">{this.props.item.source.name}</p>
            </span>
            <span className="row">{this.props.item.author}</span>
            <span className="row">{this.props.item.publishedAt}</span>
          </div>
        </a>
        <button
          className="row"
          onClick={() => this.handleSaveItem(this.props.item)}>
          <i className="fa fa-save" /> Save Article
        </button>
      </div>
    );
  }
}

export default ArtFrame;
