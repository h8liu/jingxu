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

function props(): wrap.Props {
    return {
        title: "Xu's Group for Energy Materials",
        css: './style.css',
        ga: 'UA-84380516-1',
    }
}

function generate(tmplDir: string) {
    let tmpls = new writer.TemplateWriter(tmplDir)

    function o(f: string, body: JSX.Element, h: wrap.Props) {
        tmpls.write(f + '.html', wrap.makePage(h, body, []))
    }

    let p = props();

    o('index', pageIndex(), p)
    o('group', pageGroup(), p)
    o('pub', pagePub(), p)
    o('equip', pageEquip(), p)
    o('teach', pageTeach(), p)
    o('outreach', pageOutreach(), p)
    o('contact', pageContact(), p)
}

generate('out')
