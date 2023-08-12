import React, { Component } from 'react'

export class Newsitem extends Component {
  
  render() {
    let {title,desc,url,urltoimg} = this.props
    return (
      <div className='container my-2'>
        <div className="card" style={{width:"18rem",backgroundColor:"rgb(71, 70, 70)"}} >
          <img src={!urltoimg?"https://img.icons8.com/?size=512&id=iwPromlZHImA&format=png":urltoimg} className="card-img-top" alt="..."/>
          <div className="card-body" style={{color:"white"}}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a href={url} target='blank' className="btn btn-primary btn">Read More..</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
