import {ProgressiveImage} from 'react-progressive-image-loading'

const screenshots = [{
  id: 'search',
  text: 'Results are fetched from various sites. Support for more coming soon.',
  subtext: 'Search'
}, {
  id: 'stream',
  text: 'You can start video streaming or play music right away.',
  subtext: 'Stream'
}, {
  id: 'vlc',
  text: 'If a video format is not supported, you can always stream in on VLC.',
  subtext: 'play on vlc'
}]

export default function () {
  return (
    <div className="wrapper">
      <div className="screenshots">
        {screenshots.map(s => (
          <div className="demo-card-square mdl-card mdl-shadow--2dp" key={s.id}>
            <div className="screenshot-img">
              <ProgressiveImage
                preview={`/static/thumbs/${s.id}.png`}
                src={`/static/${s.id}.png`}
                render={(src, style) => <div style={Object.assign(style, { backgroundImage: `url(${src})` })} />}
              />
            </div>

            <div className="mdl-card__supporting-text">
              {s.text}
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                {s.subtext}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}