import * as React from 'react'

export function Top(): JSX.Element {
    function link(id: string, text: string) {
        let url = id + '.html'
        return <li>
            <a href={url}>{text}</a>
        </li>
    }

    return <div>
        <h1>Xu's Group for Energy Materials</h1>
        <div className="navi">
            <ul>
                { link('index', 'Home') }
                { link('group', 'Group Member') }
                { link('pub', 'Publications') }
                { link('equip', 'Equipment') }
                { link('teach', 'Teaching') }
                { link('outreach', 'Outreach') }
                { link('contact', 'Contact') }
            </ul>
        </div>
    </div>
}
