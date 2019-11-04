import React from 'react';
import styled from 'styled-components';
import {
  XYPlot,
  XAxis,
  YAxis,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
  VerticalBarSeries,
} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

export default class Content extends React.Component {
  render() {
    const data1 = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 },
    ];
    const data2 = [
      { x: 0, y: 10 },
      { x: 1, y: 10.201896582499447 },
      { x: 2, y: 9.957798518299372 },
      { x: 3, y: 10.305367338261046 },
      { x: 4, y: 9.487411625976119 },
      { x: 5, y: 9.202217816587115 },
      { x: 6, y: 9.2830907451516 },
      { x: 7, y: 9.305603077990398 },
      { x: 8, y: 9.129231241594049 },
      { x: 9, y: 9.241284924887289 },
      { x: 10, y: 9.738738934837631 },
      { x: 11, y: 9.805653802000451 },
      { x: 12, y: 10.415778836431393 },
      { x: 13, y: 10.884351977285196 },
      { x: 14, y: 11.20688703408745 },
      { x: 15, y: 11.702541777448266 },
      { x: 16, y: 11.350506212396931 },
      { x: 17, y: 11.307228352677962 },
      { x: 18, y: 11.799040558928645 },
      { x: 19, y: 10.903756261887207 },
      { x: 20, y: 10.832416042376956 },
    ];
    return (
      <div>
        <div>Teste Linhas</div>
        <div>
          <XYPlot height={300} width={300}>
            <LineSeries data={data1} />
          </XYPlot>
          ------------------------------------
          <XYPlot height={300} width={300}>
            <LineSeries data={data1} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
          </XYPlot>
          ------------------------------------
          <XYPlot height={300} width={600}>
            <XAxis attr="x" attrAxis="y" orientation="bottom" tickTotal={20} />
            <YAxis attr="y" attrAxis="x" orientation="left" tickTotal={19} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <MarkSeries data={data2} />
            <LineSeries curve={null} data={data2} opacity={1} strokeStyle="solid" />
          </XYPlot>
          --------------------------------------
          <XYPlot height={200} width={800}>
            <VerticalBarSeries data={data1} />
            <XAxis attr="x" attrAxis="y" orientation="bottom" tickTotal={2} />
            <YAxis attr="y" attrAxis="x" orientation="left" tickTotal={2} />
          </XYPlot>
          -----------------------Mudando esilos--------------------
          <XYPlot height={300} width={800} color="red" stroke="#1774f0">
            <LineSeries data={data1} />
            <MarkSeries data={data1} />
            <LineSeries data={data2} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
          </XYPlot>
        </div>
      </div>
    );
  }
}
