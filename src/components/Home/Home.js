import React, {Component} from 'react';
import Interactive from 'react-interactive';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'Recharts';
import { PieChart, Pie, Sector, Cell } from 'Recharts';
import { log } from 'ruucm-util'
import InfoBannerComponent from '../InfoBanner';
import './Home.scss';

const data = [{name: 'wins', value: 28}, {name: 'losses', value: 2}, {name: 'draws', value:4}
                 ];
const data01 = [{name: 'wins', value: 24}, {name: 'losses', value: 4},{name: 'draws', value:6}
                 ];
const data02 = [{name: 'wins', value: 18}, {name: 'losses', value: 10},{name: 'draws', value:6}
                 ];
const data03 = [{name: 'wins', value: 17}, {name: 'losses', value: 13},{name: 'draws', value:4}
                 ];                
const COLORS = ['rgb(137, 166, 255)', 'rgb(255,151,134)', 'rgb(235,235,235)'];


var obj = {  
  method: 'GET',
  headers: {
    'X-Auth-Token': 'e600784123014d489c796ab72ed9587d'
  },
}

const dataA = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
class HomeComponent extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    fetch('https://api.football-data.org/v1/competitions/394/leagueTable',obj)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: [
            {name: 'Bayern', goalsAgainst: responseJson.standing[0].goalsAgainst, goals: responseJson.standing[0].goals, wins: responseJson.standing[0].wins, draws: responseJson.standing[0].draws, losses: responseJson.standing[0].losses },
            {name: 'BVB', goalsAgainst: responseJson.standing[1].goalsAgainst, goals: responseJson.standing[1].goals, wins: responseJson.standing[1].wins, draws: responseJson.standing[1].draws, losses: responseJson.standing[1].losses},
            {name: 'Leverkusen', goalsAgainst: responseJson.standing[2].goalsAgainst, goals: responseJson.standing[2].goals, wins: responseJson.standing[2].wins, draws: responseJson.standing[2].draws, losses: responseJson.standing[2].losses},
            {name: 'Gladbach', goalsAgainst: responseJson.standing[3].goalsAgainst, goals: responseJson.standing[3].goals, wins: responseJson.standing[3].wins, draws: responseJson.standing[3].draws, losses: responseJson.standing[3].losses},
              ]
          })
        this.setState();
      })
  }
  render() {
    return (
      <div className="home">
        <InfoBannerComponent />
        <div className="section-02">          
          <h1> 15-16 분데스리가 팀별 승리, 패배 횟수 </h1>
          <div className="row piechart-text-label-wrapper">
            <div className="col-3">
              <span className="piechart-text-label"><div className="label-point win"></div>{data[0]['value']}</span>
              <span className="piechart-text-label"><div className="label-point loss"></div>{data[1]['value']}</span>
              <PieChart width={85} height={85}>
                <Pie
                  dataKey="value"
                  data={data}
                  cx={40} 
                  cy={40} 
                  innerRadius={24}
                  outerRadius={30} 
                  fill="#8884d8"
                  paddingAngle={0}
                >
                  {
                    data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                  }
                </Pie>
                <text className="piechart-label" x={45} y={50} textAnchor="middle">
                Bayern </text>
              </PieChart>
            </div>
            <div className="col-3">
              <span className="piechart-text-label"><div className="label-point win"></div>{data01[0]['value']}</span>
              <span className="piechart-text-label"><div className="label-point loss"></div>{data01[1]['value']}</span>
              <PieChart width={93} height={85}>
                <Pie
                  dataKey="value"
                  data={data01}
                  cx={40} 
                  cy={40} 
                  innerRadius={24}
                  outerRadius={30} 
                  fill="#8884d8"
                  paddingAngle={0}
                >
                  {
                    data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                  }
                </Pie>
                <text className="piechart-label" x={45} y={50} textAnchor="middle">
                BVB </text>
              </PieChart>
            </div>
            <div className="col-3">
              <span className="piechart-text-label"><div className="label-point win"></div>{data02[0]['value']}</span>
              <span className="piechart-text-label"><div className="label-point loss"></div>{data02[1]['value']}</span>
              <PieChart width={93} height={85}>
                <Pie
                  dataKey="value"
                  data={data02}
                  cx={40} 
                  cy={40} 
                  innerRadius={24}
                  outerRadius={30} 
                  fill="#8884d8"
                  paddingAngle={0}
                >
                  {
                    data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                  }
                </Pie>
                <text className="piechart-label" x={45} y={50} textAnchor="middle">
                Leverkusen </text>
              </PieChart>
            </div>
            <div className="col-3">
              <span className="piechart-text-label"><div className="label-point win"></div>{data03[0]['value']}</span>
              <span className="piechart-text-label"><div className="label-point loss"></div>{data03[1]['value']}</span>
              <PieChart width={93} height={85}>
                <Pie
                  dataKey="value"
                  data={data03}
                  cx={40} 
                  cy={40} 
                  innerRadius={24}
                  outerRadius={30} 
                  fill="#8884d8"
                  paddingAngle={0}
                >
                  {
                    data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                  }
                </Pie>
                <text className="piechart-label" x={45} y={50} textAnchor="middle">
                Gladbach </text>
              </PieChart>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default HomeComponent;