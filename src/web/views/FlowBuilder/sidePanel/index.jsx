import React, { Component } from 'react'
import classnames from 'classnames'
import axios from 'axios'
import _ from 'lodash'

import StandardNode from './standardNode'

const style = require('./style.scss')

export default class SidePanel extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if (this.props.currentFlowNode) {
      return <StandardNode node={this.props.currentFlowNode} />
    }

    return <div>No node selected</div>
  }
}