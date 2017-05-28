import React, {PureComponent} from 'react'
import isBrowser from 'is-in-browser'
import {ProgressiveImage} from 'react-progressive-image-loading'
import Logo from './logo'

export default class Banner extends PureComponent{
  render() {
    const {version} = this.props

    return (
    <div className="banner-wrapper mdl-button--colored">
      <div className="banner-left">
        <div className="details-wrapper">
          <div className="logo">
            <Logo />
            <h4>Snape</h4>
          </div>
          <h2 className="snape-details">
            A torrent client to search, stream and download torrents. Play music, view images and stream videos.
          </h2>
          <div className="download">
            <a href={`https://github.com/ritz078/snape/releases/download/v${version}/snape-${version}.dmg`}
               className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
              <i className="mdi mdi-apple" />
            </a>
            <a href={`https://github.com/ritz078/snape/releases/download/v${version}/snape-Setup-${version}.exe`}
               className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
              <i className="mdi mdi-windows" />
            </a>
            <a href={`https://github.com/ritz078/snape`}
               className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
              <i className="mdi mdi-github-circle" />
            </a>
          </div>
          <div className="version">Version : {version}</div>
        </div>
      </div>
      <div className="banner-right" >
        {isBrowser && <ProgressiveImage
          preview="/static/thumbs/demo.png"
          src="/static/demo.png"
          render={(src, style) => <div style={Object.assign(style, { backgroundImage: `url(${src})` })} />}
        />}
      </div>
    </div>
    )
  }
}