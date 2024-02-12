import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
            constructor()
            {
            super();
            console.log("Hello i'm a constructor from news component");
            this.state=
            {
                articles:[],
                loading:false,
                page : 1
                
            }
            }

            async componentDidMount()
            {
                let url = " https://newsapi.org/v2/top-headlines?country=in&apiKey=4f839cded3c646a6a3c6661a72ec5e69&page=1";
                let data = await fetch(url);
                let parsedData = await data.json();
                console.log(parsedData);
                this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
                
            }

            handleNextClick=async()=>
            {
              if(this.state.page+1 >Math.ceil(this.state.totalResults/20))
              {

              }
              else
              {
              let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4f839cded3c646a6a3c6661a72ec5e69&page=${this.state.page+1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
      

              this.setState({
                page:this.state.page+1,
                articles:parsedData.articles
              })
            }
            
            }

            handlePrevClick=async()=>
            {
              let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4f839cded3c646a6a3c6661a72ec5e69&page=${this.state.page-1}&pageSize=20`;
              let data = await fetch(url);
              let parsedData = await data.json();
              console.log(parsedData);
  
                this.setState({
                  page:this.state.page-1,
                  articles:parsedData.articles
                })
            }

           
  render() {
    console.log("render");
    return (
      <>
      
       < div className="container my-3">
        <h1 className='text-center'> NewsMonkey - Today's Hot Headlines</h1>
       
        <div className="row">
        {this.state.articles.map((element)=>
        {
            return <div className="col-md-4"key ={ element.url }>
            <NewsItem title={element.title?element.title.slice(0,45):""} description =  {element.description?element.description.slice(0,80):""}imageUrl= {element.urlToImage} Newsurl={element.url}/>
            </div>
        })}    
      </div>
      <div className="container d-flex justify-content-between">
       <button type="button" disabled={this.state.page<=1} className="btn btn-dark"onClick={this.handlePrevClick} >&larr; Previous</button>
  <button type="button"disabled={this.state.page+1 >Math.ceil(this.state.totalResults/20)} className="btn btn-dark"onClick={this.handleNextClick}>Next &rarr;</button>
    </div>
      </div>
      
    </>
    )
  }
 

  
}
 


export default News
