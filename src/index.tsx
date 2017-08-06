import * as React from 'react'

import * as wrap from './wrap'
import * as writer from './writer'

import pageIndex from './pageindex'
import pageGroup from './pagegroup'
import pagePub from './pagepub'
import pageEquip from './pageequip'
import pageOutreach from './pageoutreach'
import pageTeach from './pageteach'
import pageContact from './pagecontact'

function props(id: string): wrap.Props {
    return {
        id: id,
        title: "Xu's Group for Energy Materials",
        css: './style.css',
        ga: 'UA-84380516-1',
    }
}

function generate(tmplDir: string) {
    let tmpls = new writer.TemplateWriter(tmplDir)

    function o(f: string, body: { (id: string): JSX.Element }) {
        let p = props(f)
        tmpls.write(f + '.html', wrap.makePage(p, body(f), []))
    }

    o('index', pageIndex)
    o('group', pageGroup)
    o('pub', pagePub)
    o('equip', pageEquip)
    o('teach', pageTeach)
    o('outreach', pageOutreach)
    o('contact', pageContact)
}

generate('out')
