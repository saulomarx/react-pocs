import React from 'react';
import styled from 'styled-components';
import { data1, data2, data3, dataNivo, data4, barData, responsiveData } from './data';
import { Line, Bar, ResponsiveBar } from 'nivo';
// import { Line, Bar } from 'nivo';

const PI = 3.14;

const keys = ['hot dogs', 'burgers', 'sandwich', 'kebab', 'fries', 'donut'];
const commonProps = {
  width: 900,
  height: 500,
  margin: { top: 60, right: 80, bottom: 60, left: 80 },
  data: dataNivo,
  padding: 0.2,
  labelTextColor: 'inherit:darker(1.4)',
  labelSkipWidth: 16,
  labelSkipHeight: 16,
};

const commonProperties = {
  width: 900,
  height: 400,
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
  animate: true,
  enableSlices: 'x',
};

export default class ReactVis extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedRow: null,
    };
  }

  handleMouseIn = selectedRow => {
    this.setState({ selectedRow });
  };

  handleMouseOut = () => {
    this.setState({ selectedRow: null });
  };

  handleColor(row) {
    const changeColor = JSON.stringify(this.state.selectedRow) === JSON.stringify(row);
    return changeColor ? 'red' : 'blue';
  }

  render() {
    console.log(dataNivo);
    return (
      <div>
        <div>Teste Graficos</div>
        -------------------
        <Bar {...commonProperties} data={barData} />
        <Line
          {...commonProperties}
          curve="monotoneX"
          data={data4}
          xScale={{
            type: 'linear',
            min: 0,
            max: 'auto',
          }}
          axisLeft={{
            legend: 'linear scale',
            legendOffset: 12,
          }}
          axisBottom={{
            legend: 'linear scale',
            legendOffset: -12,
          }}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    );
  }
}
