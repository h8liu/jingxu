import * as React from 'react'

// To generate script tag for Google Analytic

let gaPrefix = `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js',
'ga');`

export function script(account: string): JSX.Element {
    let html = {
        __html: [
            gaPrefix,
            `ga('create', '` + account + `', 'auto');`,
            `ga('send', 'pageview');`,
        ].join('\n')
    }

    return <script dangerouslySetInnerHTML={html} />
}
