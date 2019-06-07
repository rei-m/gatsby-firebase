import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="apple-touch-icon" href="icons/icon-48x48.png" sizes="48x48" />
          <link rel="apple-touch-icon" href="icons/icon-72x72.png" sizes="72x72" />
          <link rel="apple-touch-icon" href="icons/icon-96x96.png" sizes="96x96" />
          <link rel="apple-touch-icon" href="icons/icon-144x144.png" sizes="144x144" />
          <link rel="apple-touch-icon" href="icons/icon-192x192.png" sizes="192x192" />
          <link rel="apple-touch-icon" href="icons/icon-256x256.png" sizes="256x256" />
          <link rel="apple-touch-icon" href="icons/icon-384x384.png" sizes="384x384" />
          <link rel="apple-touch-icon" href="icons/icon-512x512.png" sizes="512x512" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          <div id="___gatsby_portal"></div>
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
