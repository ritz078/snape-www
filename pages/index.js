import React, { PureComponent } from 'react'

export default class Main extends PureComponent{
  render() {
    return (
      <div className="banner-wrapper" data-id="3">
        <style global jsx>{`
            * {
              margin: 0;
              padding: 0;
            }
          `}</style>
        <style jsx>{`
          .banner-wrapper {
            background-image: url('/static/background.jpg');
            height: 100vh;
            width: 100%;
            background-size: cover;
          }

          .banner-wrapper:before {
            content: '';
          	position: absolute;
          	top: 0;
          	right: 0;
          	bottom: 0;
          	left: 0;
          	background-image: linear-gradient(to bottom right,#002f4b,#000);
          	opacity: .6;
          }

          .logo {
            width: 120px;
            height: 120px;
            background-image: url('/static/logo.png');
            background-size: cover;
            margin: 0 auto;
            top: 100px;
            position: relative;
          }
        `}</style>

        <div className="logo-wrapper">
          <div className="logo"/>
        </div>
      </div>
    )
  }
};
