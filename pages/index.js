import React, { PureComponent } from 'react'
import isBrowser from 'is-in-browser'
import stylesheet from 'styles/index.css'
import fetch from 'isomorphic-unfetch'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Screenshots from '../components/Screenshots'

if (isBrowser) {
  require('material-design-lite/material.min')
}

export default class Main extends PureComponent {
  static async getInitialProps () {
    const res = await fetch('https://api.github.com/repos/ritz078/snape/releases')
    const releases = await res.json()

    const com$ = await fetch('https://api.github.com/repos/ritz078/snape/commits')
    const commits = await com$.json()
    return {releases, commits}
  }

  render () {
    const {commits, releases} = this.props
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: stylesheet}} />
        <Banner releases={releases} />
        <Features/>
        <Screenshots/>
        <div className="disclaimer">
          Snape is still in beta. If you find any issue please report it <a href="https://github.com/ritz078/snape/issues">in issues</a>
        </div>
        <div className="copyright">
          Made by <a href="https://twitter.com/ritz078">ritz078</a>
        </div>
      </div>
    )
  }
};
