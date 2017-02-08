import * as React from 'react'

import * as navi from './navi'

export default function pageIndex(): JSX.Element {
    let overview = `
    As the global demand for energy grows, sustainable electrical energy storage
    (EES) systems are expected for electric grid applications to utilize the
    intermittently energy generated from renewable sources, such as solar and
    wind. In parallel, the revolution in portable electronics and electric
    vehicles requires EES devices with higher energy density and lower cost. To
    meet the diverse requirements in different areas, advanced materials for
    different EES technologies are urgently desired.  Professor Xu’s group
    focuses on designing and developing novel materials for energy storage and
    conversion. By synergistically integrating combinatorial synthesis, advanced
    characterizations, and first principles calculation, we aim to understand
    and control the electronic / ionic transport and structural stability for
    functional ceramics during electrochemical reactions. These insights into
    the electrochemical pathways will catalyze creative designs and rational
    optimizations of ceramic materials for different energy technologies.
    `
    return <div>
        <img className="jing-large cover"
            src="images/jing-large.jpg" alt="Jing Xu"/>
        <h3>Research Overview</h3>
        <p>{overview}</p>

        <h3>News</h3>
        <p>We have several openings for postdocs, graduate students, and
            undergraduates. <br/> If you have interest,
            please send your CV to <a href="mailto:jingxu@iastate.edu">
                jingxu@iastate.edu</a>.
        </p>

        <ul>
            <li>2017-01-01, Welcome Hao to join in the group!</li>
            <li>2016-11-02, Welcome Jacob to join in the group!</li>
            <li>2016-09-19, our website is launched.</li>
            <li>2016-09-16, Welcome Guantai to join in the group!</li>
            <li>2016-08-16, our group is established.</li>
        </ul>
    </div>
}
