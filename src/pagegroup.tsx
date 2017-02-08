import * as React from 'react'

import * as navi from './navi'

export default function pageGroup(): JSX.Element {
    return <div>
        <h2>Group Members</h2>

        <h3>Principle Investigator</h3>
        <div className="info">
            <a name="jing"/>
            <img src="images/jing.jpg" className="photo" alt="Jing Xu"/>
            <h4>Jing Xu, Ph.D.</h4>
            <p>
                2220BL HOOVER<br/>
                Ames, IA 50011<br/>
                515-294-9278<br/>
                <a href="mailto:jingxu@iastate.edu">jingxu @iastate.edu</a>
            </p>

            <ul>
                <li>Assistant Professor, Material Science and Engineering
                    Department, Iowa State University, Present</li>
                <li>Postdoc, Applied Energy Materials Group,
                    Lawrence Berkeley National Laboratory, 2016</li>
                <li>Ph.D.Materials Science and Engineering,
                    University of California, San Diego, 2014</li>
                <li>B.S.Materials Chemistry,
                    University of Science and Technology of China, 2009</li>
            </ul>
        </div>

        <h3>Postdocs</h3>

        <div className="comment"><em>None yet; application welcomed.</em></div>

        <h3>Graduate Students</h3>

        <div className="info">
            <a name="guantai"/>
            <img src="images/guantai.png" className="photo" alt="Guantai Hu"/>
            <h4>Guantai Hu</h4>
            <p>Guantai Hu is a master student currently working under the guidance
                of Dr. Xu. He has great enthusiasm in rechargeable battery research,
                and his research topic is the application of transition metal
                oxides as cathode material in sodium ion battery.</p>
        </div>

        <div className="info">
            <a name="hao"/>
            <img src="images/hao.png" className="photo" alt="Hao Lin"/>
            <h4>Hao Lin</h4>
            <p>Hao Lin received his B.S. in Mining Engineering from Chongqing
                University and M.S. in Applied Chemistry from Peking
                University. His previous work focused on cathode materials for
                lithium sulfur batteries and complex transition metal oxide/sulfide
                nanostructure based on electrode materials for rechargeable
                lithium/sodium batteries.His current interest still lies primarily
                in designing and exploring novel electrode materials for
                rechargeable sodium and lithium batteries.</p>
        </div>

        <h3>Undergraduates</h3>

        <div className="info">
            <a name="jacob"/>
            <img src="images/jacob.png" className="photo" alt="Jacob Wheaton"/>
            <h4>Jacob Wheaton</h4>
            <p>Jacob Wheaton is a freshman undergraduate student in Materials
                Engineering with a second major in French Language and Culture.
                He is currently the Vice-President of the ISU Gaffer&#39; s Guild
                enjoys spending his free time glass blowing and participating in
                other activities on campus, such as intramural bowling. One of his
                greatest passions is traveling, where Jacob has been to many
                different countries on three different continents. His interest in
                research was fueled through his desire to develop new technologies
                to improve the world as we know it. Jacob&#39; s goal is to develop
                higher capacity energy storage materials to help foster more
                sustainable technologies for travel and long-term energy storage.
            </p>
        </div>

        <h3>Visitors</h3>

        <div className="comment"><em>None yet; application welcomed.</em></div>

        <hr/>

        <p className="ad"><em>We have several openings for postdocs,
            graduate students, and undergraduates. <br/>
            If you have interests, please send your CV
            to <a href="mailto:jingxu@iastate.edu">jingxu@iastate.edu</a>.</em></p>
    </div >
}