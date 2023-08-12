import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country:'in',
    pagesize:12,
    category:'general',
    heading:'Business'
  }

  static propTypes = {
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
    heading:PropTypes.string
  }

  constructor(){
    super();
    this.state = {
      articles:[],
      loading:false,
      page:1
    }
  }
prev=async()=>{
  
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4d79a9d56bbf4ac8a56cc11ef1823f79&page=${this.state.page-1}&pageSize=12`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      page:this.state.page-1,
      articles: parsedata.articles,
      loading:false
    })
  
}
next = async()=>{
  if(this.state.page + 1>Math.ceil(this.state.total/20)){}
  else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4d79a9d56bbf4ac8a56cc11ef1823f79&page=${this.state.page+1}&pageSize=12`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      page:this.state.page+1,
      articles: parsedata.articles,
      loading:false
    })
  }
}
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4d79a9d56bbf4ac8a56cc11ef1823f79&page=1&pageSize=12`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({articles: parsedata.articles,total:parsedata.totalResults,loading:false})
  }

  render() {
    return (
      <div className="container" style={{marginTop:"60px"}}>
        <h1 style={{color:"white"}}>Hot Updates🔥- {this.props.heading}</h1>
        <hr style={{width:"600px",color:"white"}}/>
        {this.state.loading && <Spinner/>}
        <div className='row'>
          {this.state.articles.map((element)=>{
            return element.urlToImage && <div className="col-md-3">  
              <Newsitem key={element.url} title={element.title?element.title.slice(0,40):""} desc={element.description?element.description.slice(0,80):""} url={element.url} urltoimg={element.urlToImage} high={this.props.high}/>
            </div>
          })}
        </div>
        <div className="container my-2" style={{display:"flex",justifyContent:"space-between"}}>
        <button href="/" disabled={this.state.page<=1} onClick={this.prev} className="btn btn-primary btn my-4">&larr; Prev</button>
        <button href="/" disabled={this.state.page + 1>Math.ceil(this.state.total/20)} onClick={this.next} className="btn btn-primary btn my-4">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
