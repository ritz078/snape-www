import React, { PureComponent } from 'react'
import isBrowser from 'is-in-browser'
import stylesheet from 'styles/index.css'
import fetch from 'isomorphic-unfetch'
import Banner from '../components/Banner'

if (isBrowser) {
  require('material-design-lite/material.min')
}

export default class Main extends PureComponent {
  static async getInitialProps () {
    const res = await fetch('https://api.github.com/repos/ritz078/snape/releases')
    const json = await res.json()
    return {releases: json}
  }

  render () {
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: stylesheet}} />
        <Banner releases={this.props.releases}/>
      </div>
    )
  }
};
