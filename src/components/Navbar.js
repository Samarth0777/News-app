import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  home=()=>{
    document.getElementById("home").classList.add("high");
    document.getElementById("enter").classList.remove("high");
    document.getElementById("gen").classList.remove("high");
    document.getElementById("health").classList.remove("high");
    document.getElementById("science").classList.remove("high");
    document.getElementById("tech").classList.remove("high");
    document.getElementById("sports").classList.remove("high");
  }
  enter=()=>{
    document.getElementById("enter").classList.add("high");
    document.getElementById("home").classList.remove("high");
    document.getElementById("gen").classList.remove("high");
    document.getElementById("health").classList.remove("high");
    document.getElementById("science").classList.remove("high");
    document.getElementById("tech").classList.remove("high");
    document.getElementById("sports").classList.remove("high");
  }
  gen=()=>{
    document.getElementById("gen").classList.add("high");
    document.getElementById("enter").classList.remove("high");
    document.getElementById("home").classList.remove("high");
    document.getElementById("health").classList.remove("high");
    document.getElementById("science").classList.remove("high");
    document.getElementById("tech").classList.remove("high");
    document.getElementById("sports").classList.remove("high");
  }
  health=()=>{
    document.getElementById("health").classList.add("high");
    document.getElementById("enter").classList.remove("high");
    document.getElementById("gen").classList.remove("high");
    document.getElementById("home").classList.remove("high");
    document.getElementById("science").classList.remove("high");
    document.getElementById("tech").classList.remove("high");
    document.getElementById("sports").classList.remove("high");
  }
  science=()=>{
    document.getElementById("science").classList.add("high");
    document.getElementById("enter").classList.remove("high");
    document.getElementById("gen").classList.remove("high");
    document.getElementById("health").classList.remove("high");
    document.getElementById("home").classList.remove("high");
    document.getElementById("tech").classList.remove("high");
    document.getElementById("sports").classList.remove("high");
  }
  tech=()=>{
    document.getElementById("tech").classList.add("high");
    document.getElementById("enter").classList.remove("high");
    document.getElementById("gen").classList.remove("high");
    document.getElementById("health").classList.remove("high");
    document.getElementById("science").classList.remove("high");
    document.getElementById("home").classList.remove("high");
    document.getElementById("sports").classList.remove("high");
  }
  sports=()=>{
    document.getElementById("sports").classList.add("high");
    document.getElementById("enter").classList.remove("high");
    document.getElementById("gen").classList.remove("high");
    document.getElementById("health").classList.remove("high");
    document.getElementById("science").classList.remove("high");
    document.getElementById("tech").classList.remove("high");
    document.getElementById("home").classList.remove("high");
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav " style={{paddingTop:"0px",paddingBottom:"0px"}}>
            <div className="container-fluid dark">
                <h2 className="navbar-brand" style={{color:"white"}} >NewsApp</h2>
                <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span  className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link id="home" onClick={this.home} style={{color:"white",borderRadius: "20px"}} className="mx-2 nav-link active highlight high" to="/"  >Home</Link>
                        <Link id="enter" onClick={this.enter} style={{color:"white",borderRadius: "20px"}} className="mx-2 nav-link highlight" to="/entertainment">Entertainment</Link>
                        <Link id="gen" onClick={this.gen} style={{color:"white",borderRadius: "20px"}} className="mx-2 nav-link highlight" to="/general">General</Link>
                        <Link id="health" onClick={this.health} style={{color:"white",borderRadius: "20px"}} className="mx-2 nav-link highlight" to="/health">Health</Link>
                        <Link id="science" onClick={this.science} style={{color:"white",borderRadius: "20px"}} className="mx-2 nav-link highlight" to="/science">Science</Link>
                        <Link id="tech" onClick={this.tech} style={{color:"white",borderRadius: "20px"}} className="mx-2 nav-link highlight" to="/technology">Technology</Link>
                        <Link id="sports" onClick={this.sports} style={{color:"white",borderRadius: "20px"}} className="mx-2 nav-link highlight" to="/sports">Sports</Link>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
