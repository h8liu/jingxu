import * as React from 'react'

interface Props {
    id: string
}

export function Top(props: Props): JSX.Element {
    function link(id: string, text: string): JSX.Element {
        let url = id + '.html'
        if (id === props.id) {
            return <li className="this">{text}</li>
        }
        return <li>
            <a href={url}>{text}</a>
        </li>
    }

    return <div>
        <div className="col header">
            <h1><a href="/">Xu's Group for Energy Materials</a></h1>
            <div>
                <a href="https://www.mse.iastate.edu/">
                    Materials Science and Engineering
                </a>, <a href="https://www.iastate.edu/">
                    Iowa State University
                </a>
            </div>
        </div>
        <div className="navi">
            <div className="col">
                <ul>
                    { link('index', 'Home') }
                    { link('group', 'Group Members') }
                    { link('pub', 'Publications') }
                    { link('equip', 'Equipment') }
                    { link('teach', 'Teaching') }
                    { link('outreach', 'Outreach') }
                    { link('contact', 'Contact') }
                </ul>
            </div>
        </div>
    </div>
}

export function Bottom(): JSX.Element {
    return <div className="col bottom">
        &copy; 2017, Jing Xu. All rights reserved.
        <span><a href="/contact.html">Contact</a></span>
    </div>
}
