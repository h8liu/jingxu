import * as React from 'react'

import * as navi from './navi'

export default function pageEquip(): JSX.Element {
    return <div>
        <navi.Top />

        <h2>Teaching</h2>
        <ul className="teach">
            <li>Fall 2016, MAT E 321, Introduction to Ceramic Science</li>
        </ul>
    </div>
}