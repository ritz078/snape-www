const features = [{
  icon: 'magnify',
  title: 'Search Torrents',
  desc: 'You can search for any type of torrent and sort them applying filters.'
}, {
  icon: 'eye',
  title: 'Stream',
  desc: 'Stream videos, play music, view images instantly with seeking support.'
}, {
  icon: 'vlc',
  title: 'play on VLC',
  desc: 'If the media format is not supported by snape, you can start streaming on VLC.'
},{
  icon: 'download',
  title: 'Download Torrents',
  desc: 'Optionally you can download any torrent and stream at the same time.'
}, {
  icon: 'cast',
  title: 'Chromecast Support',
  desc: 'Stream videos, audio and images on the big screen using Chromecast.'
}, {
  icon: 'cash',
  title: 'Free, No ads',
  desc: 'Its completely free. No ads and no tracking.'
}, {
  icon: 'language-html5',
  title: 'Easily Hackable',
  desc: 'Built using HTML, CSS and JavaScript using Electron.'
}, {
  icon: 'github-circle',
  title: 'Open Source',
  desc: 'The code is available on GitHub. You are welcome to contribute.'
}]

export default function () {
  return (
    <div className="steps-wrapper">
      <ul>
        {features.map(f => (
          <li className="mdl-list__item mdl-list__item--three-line" key={f.icon}>
          <span className="mdl-list__item-primary-content">
            <i className={`mdi mdi-${f.icon} mdl-list__item-avatar`} />
            <span>{f.title}</span>
            <span className="mdl-list__item-text-body">
              {f.desc}
            </span>
          </span>
          </li>
        ))}
      </ul>
    </div>
  )
}