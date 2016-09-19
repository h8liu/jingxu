import * as React from 'react'

import * as navi from './navi'

export default function pageEquip(): JSX.Element {
    return <div>
        <navi.Top />

        <h2>Contact</h2>
        <p>Professor Jing Xu</p>
        <p>
            2220BL HOOVER<br/>
            Ames, IA 50011<br/>
            515-294-9278<br/>
            <a href="mailto:jingxu@iastate.edu">jingxu@iastate.edu</a>
        </p>
    </div>
}