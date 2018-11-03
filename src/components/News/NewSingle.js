import React from 'react';



  const NewSingle = ({item}) => {
    let source = item.source.name;
    let image = item.urlToImage;
    let artFrame = (
      <a href={item.url} target='_blank'>
        <div className="card-image">
          <img src={item.urlToImage}/>
        </div>
        <div className="article-text text-left">
        <span style={{fontSize:'22px'}} className='row'>{item.title}</span>
        <span className='row'><p className='sourceDisplay'>{item.source.name}</p></span>
        <span className='row'>{item.author}</span>
        <span className='row'>{item.publishedAt}</span>
        <p className="row"><i class="fa fa-save"></i> Save Article</p>

        </div>
      </a>
    )

    if(source==='BBC News'){
      return (
        <div className="element-item red1 newsArticle news-box col-md-4 col-sm red1Link">
          {artFrame}
        </div>
      )
    }
    if(source==='Tech Crunch'){
      return (

        <div className="element-item red2 newsArticle news-box col-md-3 col-sm red2Link">
          {artFrame}
        </div>
      )
    }

    if(source==='Bloomberg'){
      return (
        <div className="element-item purple newsArticle news-box col-md-3 col-sm purpleLink">
          {artFrame}
        </div>
      )
    }
    if(source==='CNBC'){
      return (
        <div className="element-item blue2 newsArticle news-box col-md-3 col-sm blue2Link">
          {artFrame}
        </div>
      )
    }
    if(source==='The Wall Street Journal'){
      return (
        <div className="element-item red1 newsArticle news-box col-md-3 col-sm red1Link">
          {artFrame}
        </div>
      )
    }
    if(source==='USA Today'){
      return (
        <div className="element-item purple1 newsArticle news-box col-md-3 col-sm purpleLink">
          {artFrame}
        </div>
      )
    }
    if(source==='Reuters'){
      return (
        <div className="element-item blue1 newsArticle news-box col-md-3 col-sm blue1Link">
          {artFrame}
        </div>
      )
    }
    if(source==='CNN'){
      return (
        <div className="element-item blue3 newsArticle news-box col-md-3 col-sm blue3Link">
          {artFrame}
        </div>
      )
    }
    if(source==='Fox News'){
      return (
        <div className="element-item red3 newsArticle news-box col-md-3 col-sm red3Link">
          {artFrame}
        </div>
      )
    }
    if(source==='The Hill'){
      return (
        <div className="element-item red1 newsArticle news-box col-md-3 col-sm red1Link">
          {artFrame}
        </div>
      )
    }
    if(source==='Slate.com'){
      return (
        <div className="element-item blue4 newsArticle news-box col-md-3 col-sm blue4Link">
          {artFrame}
        </div>
      )
    }
    if(source==='Foxbusiness.com'){
      return (
        <div className="element-item red3 newsArticle news-box col-md-3 col-sm red3Link">
          {artFrame}
        </div>
      )
    }
    if(source==='Marketwatch.com'){
      return (
        <div className="element-item blue1 newsArticle news-box col-md-3 col-sm blue1Link">
          {artFrame}
        </div>
      )
    }
    if(source==='Time'){
      return (
        <div className="element-item red2 newsArticle news-box col-md-3 col-sm red2Link">
          {artFrame}
        </div>
      )
    }
    if(source==='The New York Times'){
      return (
        <div className="element-item blue2 newsArticle news-box col-md-3 col-sm blue2Link">
          {artFrame}
        </div>
      )
    }
    else {
      return (
        <div className="element-item purple newsArticle news-box col-md-3 col-sm purpleLink">
          {artFrame}
        </div>
      )
    }

  };




export default NewSingle;
