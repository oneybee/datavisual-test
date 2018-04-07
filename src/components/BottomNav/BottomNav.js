import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import './BottomNav.scss';
import { log } from 'ruucm-util'


export default class BottomNavComponent extends Component {
  render() {
    return (
    <div id="blogmenu" className="bottom-nav">
      <div className="row">
        <div className="col-3">
          <Link to='about'>
            <span className="chief-mate chief-mate-user"></span>
            <p>About</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to='/'>
            <span className="chief-mate chief-mate-bar-graph"></span>
            <p>골득실</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to='wins'>
            <span className="chief-mate chief-mate-circular-graph"></span>
            <p>승리횟수</p>
          </Link>
        </div>
        <div className="col-3">
          <a href="https://github.com/oneybee/datavisual-react">
            <span className="chief-mate chief-mate-github"></span>
            <p>Github</p>
          </a>
        </div>
      </div>
    </div>
    )
  }
}



