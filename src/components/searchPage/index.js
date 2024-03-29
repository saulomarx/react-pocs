import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactVis from './reactVis';

const { REACT_APP_API_URL } = process.env;
const Styles = styled.div``;

class Dictionary extends Component {
  constructor() {
    super();
    this.state = {
      terms: [],
      selectedTerm: null,
      selected: null,
    };
  }

  async componentWillMount() {
    const terms = [];
    console.log(terms);
    this.setState({ terms });
  }
  render() {
    return (
      <Styles>
        <ReactVis />
      </Styles>
    );
  }
}

export default Dictionary;
