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
  Hint,
  Highlight,
  AreaSeries,
  GradientDefs,
  ArcSeries,
} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

const PI = 3.14;

export default class ReactVis extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedRow: null,
    };
  }

  handleMouseIn(selectedRow) {
    this.setState({ selectedRow });
  }

  handleMouseOut() {
    this.setState({ selectedRow: null });
  }

  handleColor(row) {
    const changeColor = JSON.stringify(this.state.selectedRow) === JSON.stringify(row);
    return changeColor ? 'red' : 'blue';
  }

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
    const data3 = [
      { angle0: 0, angle: Math.PI / 4, opacity: 0.2, radius: 2, radius0: 1 },
      { angle0: PI / 4, angle: (2 * PI) / 4, radius: 3, radius0: 0 },
      { angle0: (2 * PI) / 4, angle: (3 * PI) / 4, radius: 2, radius0: 0 },
      { angle0: (3 * PI) / 4, angle: (4 * PI) / 4, radius: 2, radius0: 0 },
      { angle0: (4 * PI) / 4, angle: (5 * PI) / 4, radius: 2, radius0: 0 },
      { angle0: 0, angle: (5 * PI) / 4, radius: 1.1, radius0: 0.8 },
    ];

    return (
      <div>
        <div>Teste Graficos</div>
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
          #################################### --------------------------------------
          <XYPlot height={300} width={800}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={data1} />
            {data1.map(data => (
              <MarkSeries
                id={data}
                data={[data]}
                color={this.handleColor(data)}
                onValueMouseOver={() => this.handleMouseIn(data)}
                onSeriesMouseOut={() => this.handleMouseOut()}
              />
            ))}
          </XYPlot>
          ----------------- ------ #################################### -----------------------
          <XYPlot height={300} width={800} color="red" stroke="#1774f0">
            <LineSeries data={data1} />
            <MarkSeries data={data1} />
            <LineSeries data={data2} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
          </XYPlot>
          -------------------------------------
          <XYPlot width={300} height={800}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />

            <MarkSeries
              strokeWidth={2}
              opacity="0.8"
              sizeRange={[5, 225]}
              colorType="literal"
              getColor={d => (d ? '#EF5D28' : '#12939A')}
              data={data1}
            />
            <Highlight
              drag
              enableX={false}
              onBrush={area => this.setState({ filter: area })}
              onDrag={area => this.setState({ filter: area })}
            />
          </XYPlot>
          -------------------------------------
          <XYPlot height={300} width={800} color="red" stroke="#1774f0">
            <LineSeries data={data1} />
            <MarkSeries data={data1} />
            <LineSeries data={data2} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <Hint value={'batata'}>
              <div style={{ background: 'black' }}>
                <h3>Value of hint</h3>
                <p>{'Batarao'}</p>
              </div>
            </Hint>
          </XYPlot>
        </div>
        --------------------------------------
        <XYPlot width={300} height={300}>
          <GradientDefs>
            <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="red" stopOpacity={0.4} />
              <stop offset="100%" stopColor="blue" stopOpacity={0.3} />
            </linearGradient>
          </GradientDefs>
          <AreaSeries
            color={'url(#CoolGradient)'}
            data={[{ x: 1, y: 10, y0: 1 }, { x: 2, y: 25, y0: 5 }, { x: 3, y: 15, y0: 3 }]}
          />
        </XYPlot>
        --------------------------------------
        <XYPlot xDomain={[-5, 5]} yDomain={[-5, 5]} width={800} height={800}>
          <ArcSeries
            animation
            radiusType={'literal'}
            center={{ x: -2, y: 2 }}
            data={data3}
            colorType={'literal'}
          />
        </XYPlot>
      </div>
    );
  }
}
