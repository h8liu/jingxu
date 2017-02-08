import * as React from 'react'

import * as ga from './ga'
import * as navi from './navi'

export interface Props {
    id: string
    title: string // page title
    css: string // stylesheet
    ga?: string // Google Analytics account
    goImport?: JSX.Element // Golang import meta
}

function makeHead(props: Props) {
    let style = props.css &&
        <link rel="stylesheet" type="text/css" href={ props.css } />
    let gascript = props.ga && ga.script(props.ga)
    return <head>
        <meta charSet="UTF-8" />
        <title>
            { props.title || 'shanhu' }
        </title>
        { style }
        { gascript }
    </head>
}

export function makePage(
    props: Props,
    body: JSX.Element,
    scripts: string[]
) {
    return <html lang="en">
        {makeHead(props) }
        <body>
            <navi.Top id={props.id} />
            <div className="body col">
                { body }
            </div>
            <navi.Bottom />
            { scripts.map(f => <script src={f} key={f} />) }
        </body>
    </html>
}
