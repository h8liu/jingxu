import * as React from 'react'

import * as navi from './navi'

export default function pageGroup(): JSX.Element {

    return <div>
        <navi.Top />
        <h2>Group Member</h2>

        <h3>Principle Investigator</h3>
        <table className="member"><tbody>
        <tr>
            <td><img src='images/jing.jpg' className="photo"/></td>
            <td>
                <p>Jing Xu, Ph.D.</p>
                <p>
                    2220BL HOOVER<br/>
                    Ames, IA 50011<br/>
                    515-294-9278<br/>
                    <a href="mailto:jingxu@iastate.edu">jingxu@iastate.edu</a>
                </p>

                <ul>
                    <li>Assistant Professor, Material Science and Engineering
                    Department, Iowa State University, Present</li>
                    <li>Postdoc, Applied Energy Materials Group,
                    Lawrence Berkeley National Laboratory, 2016</li>
                    <li>Ph. D. Materials Science and Engineering,
                    University of California, San Diego, 2014</li>
                    <li>B. S. Materials Chemistry,
                    University of Science and Technology of China, 2009</li>
                </ul>
            </td>
        </tr>
        </tbody></table>

        <h3>Postdocs</h3>

        <h3>Graduate Students</h3>

        <h3>Undergraduates</h3>

        <h3>Visitors</h3>

        <p><em>We have several openings for postdocs, graduate students,
        and undergraduates. If you have interest, please send your CV
        to <a href="mailto:jingxu@iastate.edu">jingxu@iastate.edu</a>.</em></p>
    </div>
}