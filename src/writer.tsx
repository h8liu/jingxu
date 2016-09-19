import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'

import * as fs from 'fs'
import * as path from 'path'
import * as mkdirp from 'mkdirp'

export class TemplateWriter {
    dir: string
    dirMade: boolean

    constructor(dir: string) {
        this.dir = dir
        this.dirMade = false
    }

    mkdir() {
        if (this.dirMade) {
            return
        }
        mkdirp.sync(this.dir)
        this.dirMade = true
    }

    write(f: string, dom: JSX.Element) {
        this.mkdir()
        let p = path.join(this.dir, f)
        console.log(p)
        let s = '<!doctype html>\n' + ReactDOMServer.renderToStaticMarkup(dom)
        fs.writeFileSync(p, s)
    }
}
