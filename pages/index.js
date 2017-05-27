import React, { PureComponent } from 'react'
import stylesheet from 'styles/index.css'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Screenshots from '../components/Screenshots'

export default class Main extends PureComponent {
  static async getInitialProps () {
    const res = await fetch('https://api.github.com/repos/ritz078/snape/releases')
    const releases = await res.json()
    return {releases}
  }

  render () {
    const {releases} = this.props
    return (
      <div>
        <Head>
          <title>Snape</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta name='description'
                content='A torrent client to search, stream and download torrents. Play music, view images and stream videos.' />
          <link rel="apple-touch-icon" sizes="57x57" href="/static/head/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/head/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/head/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/head/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/head/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/head/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/head/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/head/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/head/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192/"
                href="/static/head/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/head/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/head/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/head/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#4285f4" />
          <meta name="msapplication-TileImage" content="/static/head/ms-icon-144x144.png" />
          <meta name="theme-color" content="#4285f4" />
          <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700"/>
          <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-blue.min.css"/>
          <link rel="stylesheet" href="//cdn.materialdesignicons.com/1.9.32/css/materialdesignicons.min.css"/>
        </Head>
        <style dangerouslySetInnerHTML={{__html: stylesheet}} />
        <Banner releases={releases} />
        <Features />
        <Screenshots />
        <div className="disclaimer">
          Snape is still in beta. If you find any issue please report it <a
          href="https://github.com/ritz078/snape/issues">in issues</a>
        </div>
        <div className="copyright">
          Made by <a href="https://twitter.com/ritz078">ritz078</a>
        </div>
      </div>
    )
  }
};
