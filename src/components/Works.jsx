import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import { Link } from 'react-router-dom';

function Works() {
  return (
    <div className="container text-center">

    <section id="skill">
      <div class="text-center">
        <h1 class="title">WORKS</h1>
        <div class="row text-center">
          <div class="col-md-4 services">
            <img src={reactImage} />
            <h4>React/Next.js</h4>
            <p>React/Next.jsがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={jsImage} />
            <h4>HTML/CSS/JS</h4>
            <p>HTML/CSS/JSがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={firebaseImage} />
            <h4>Wordpress</h4>
            <p>Wordpressがつかえます</p>
          </div>
        </div>
        <button type="button" class="btn btn-primary">
          スキル一覧
        </button>
      </div>
    </section>
  </div>

  )
}

export default Works