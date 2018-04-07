import React, {Component} from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'Recharts';
import { log } from 'ruucm-util'
import InfoBannerComponent from '../InfoBanner';
import './WinsCount.scss'

var obj = {  
  method: 'GET',
  headers: {
    'X-Auth-Token': 'e600784123014d489c796ab72ed9587d'
  },
}

var ary = [
  {name: '2015-2016', wins: 0},
  {name: '2016-2017', wins: 0},
  {name: '2017-2018', wins:0}
];
class WinsCountComponent extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      bayernWins: ary,
    }
  }
  componentDidMount() {
    fetch('https://api.football-data.org/v1/competitions/394/leagueTable',obj)
    .then((response) => response.json())
    .then((responseJson) => {
      ary[0] = {name: '2015-2016',wins: responseJson.standing[0].wins}
      this.setState({
        bayernWins: ary,
      });
    })
    fetch('https://api.football-data.org/v1/competitions/452/leagueTable',obj)
    .then((response) => response.json())
    .then((responseJson) => {
      ary[1] = {name: '2016-2017', wins: responseJson.standing[1].wins}
      this.setState({
        bayernWins: ary,
      });
    })
    fetch('https://api.football-data.org/v1/competitions/430/leagueTable',obj)
    .then((response) => response.json())
    .then((responseJson) => {
      ary[2] = {name: '2017-2018', wins: responseJson.standing[2].wins}
      this.setState({
        bayernWins: ary,
      });
    })
  }
  render() {
    return (
      <div className="wins-count">
        <InfoBannerComponent />
        <div className="section-03">
          <a className="font">
            <div>
              <p>2015-2017</p>
              <span className="piechart-text-label"><div className="label-point win"></div></span>
            </div>
            <p>바이에른뮌헨의 최근 리그 승리 횟수</p>
          </a>
          <div className="areachart">
              {(this.state.bayernWins[0]['wins'] != 0 
              && this.state.bayernWins[1]['wins'] != 0
              && this.state.bayernWins[2]['wins'] != 0)? (
              <AreaChart width={335} height={250} data={this.state.bayernWins}
              margin={{top: 5, right: 0, left: 0, bottom: 5}}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="rgb(137, 166, 255)" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="rgb(137, 166, 255)" stopOpacity={0.4}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name"/>
                <Tooltip/>
                <Area type='monotone' dataKey='wins' stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
              </AreaChart>
            ):(<p>loading..</p>)}
          </div>
        </div>
      </div>
    )
  }
}

export default WinsCountComponent;