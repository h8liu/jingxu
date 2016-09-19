import * as React from 'react'

import * as navi from './navi'

export default function pagePub(): JSX.Element {
    let list = <ul className="pubs">
        <li>
            Xu, J.;
            Lin F.; Nordlund D.; Crumlin J. E.; Wang, F.; Bai, J.;
            Doeff, M. M.; Tong, W.; <a href="papers/018.pdf">
            Elucidation of the surface characteristics and electrochemistry
            of high-performance LiNiO<sub>2</sub></a>. <em>
            Chemical Communications</em> 2016, 52, 4239-4242. 
        </li>
        <li>
            Xu, J.;
            Liu H.; Meng, Y. S., <a href="papers/017.pdf">
            Exploring Li substituted O3-structured layered oxides
            NaLi<sub>x</sub>Ni<sub>1/3-x</sub>Mn<sub>1/3+x
            </sub>Co<sub>1/3-x</sub>O<sub>2</sub> (x= 0.07, 0.13, and 0.2) as
            promising cathode materials for rechargeable Na batteries</a>. <em>
            Electrochemistry Communications</em> 2015, 60, 13-16.
        </li>
        <li>
            Liu H.; Xu, J.;
            Ma, C.; Meng, Y. S., <a href="papers/016.pdf">
            A new O3-type layered oxide cathode with high energy / power
            density for rechargeable Na batteries</a>. <em>
            Chemical Communications</em> 2015, 51,
            4693-4696. <span className="comment">
            (Equally contributed first authors)</span>
        </li>
        <li>
            Ma, C.; Xu, J.;
            Alvarado, J.; Qu, B.; Somerville J.;
            Lee, J. Y.; Meng, Y. S., <a href="papers/015.pdf">
            Investigating the energy storage mechanism of SnS<sub>2</sub>-rGO
            composite anode for advanced Na-ion batteries</a>. <em>
            Chemistry of Materials</em> 2015, 27, 5633-5640.
        </li>
        <li>
            Xu, J.; Ma, C.;
            Balasubramanian, M.; Meng, Y. S., <a href="papers/014.pdf">
            Understanding Na<sub>2</sub>Ti<sub>3</sub>O<sub>7</sub> as
            an ultra-low voltage material for a Na-ion battery</a>. <em>
            Chemical Communications</em> 2014, 50, 12564-12567.
        </li>
        <li>
            Xu, J.; Lee, D. H.; Clement,
            R. J.; Yu, X.; Leskes, M.; Pell, A. J.;
            Pintacuda, G.; Yang, X.-Q.; Grey, C. P.;
            Meng, Y. S., <a href="papers/013.pdf">
            Identifying the critical role of Li substituition in
            P2-Na<sub>x</sub>[Li<sub>y</sub>Ni<sub>z</sub>Mn<sub>1-y-z</sub>]O
            <sub>2</sub> (0 {'<'} x, y, z {'<'} 1) intercalation cathode
            materials for high energy Na-ion batteries</a>. <em>
            Chemistry of Materials</em> 2014, 26, 1260-1269.
        </li>
        <li>
            Qu, B.; Ma, C.; Ji, G.; Xu, C.; Xu, J.;
            Meng, Y. S.; Wang, T.; Lee, J. Y., <a href="papers/012.pdf">
            Layered SnS2-reduced graphene oxide composite - a high-capacity,
            high-rate, and long-cycle life sodium-ion battery anode
            material</a>. <em>Advanced Materials</em> 2014, 23, 3854-3859.
        </li>
        <li>
            Zhao, J.; Xu, J.; Lee, D. H.; Dimov, N.; Meng, Y. S.;
            Okada, S., <a href="papers/011.pdf">
            Electrochemical and thermal properties of P2-type
            Na<sub>2/3</sub>Fe<sub>1/3</sub>Mn<sub>2/3</sub>O<sub>2</sub>
            for Na-ion batteries</a>. <em>Journal of Power Sources</em> 2014,
            264, 235-239.
        </li>
        <li>
            Xu, J.; Lee, D. H.; Meng, Y. S., <a href="papers/010.pdf">Recent
            advances in sodium intercalation positive electrode materials
            for sodium ion batteries</a>. <em>
            Functional Materials Letters</em> 2013, 6, 1.
        </li>
        <li>
            Rong, J. P.; Fang, X.; Ge, M. Y.; Chen, H. T.; Xu, J.;
            Zhou, C. W., <a href="papers/009.pdf">Coaxial Si / anodic titanium
            oxide / Si nanotubes arrays for lithium-ion battery anodes</a>. <em>
            Nano Research</em> 2013, 6, 182-190.
        </li>
        <li>
            Lee, D. H.; Xu, J.; Meng, Y. S., <a href="papers/008.pdf">
            An advanced cathode for Na-ion batteries with high rate and
            excellent structural stability</a>. <em>Physical Chemistry
            Chemical Physics</em> 2013, 15, 9,
            3304-3312. <span className="comment">
            (Equally contributed first authors)</span>
        </li>
        <li>
            Chen, H. T.; Xu, J.; Chen, P. C.; Fang, X.; Qiu, J.; Fu, Y.;
            Zhou, C. W., <a href="papers/007.pdf">
            Bulk synthesis of crystalline and crystalline core/amorphous
            shell silicon nanowires and their application for energy
            storage</a>. <em>ACS Nano</em> 2011, 5,
            8383-8390. <span className="comment">
            (Equally contributed first authors)</span>
        </li>
        <li>
            Chen, P. C.; Xu, J.; Chen, H. T.; Zhou,
            C. W., <a href="papers/006.pdf">Hybrid silicon-carbon
            nanostructured composites as superior anodes for lithium ion
            batteries</a>. <em>Nano Research</em> 2011, 4,
            290-296.  <span className="comment">
            (Equally contributed first authors)</span>
        </li>
        <li>
            Ding, N.; Xu, J.; Yao, Y. X.; Wegner, G.; Lieberwirth, I.;
            Chen, C. H., <a href="papers/005.pdf">
            Improvement of cyclability of Si as anode for Li-ion
            batteries</a>. <em>Journal of Power Sources</em> 2009 192, 644-651.
        </li>
        <li>
            Ding, N.; Xu, J.; Yao, Y. X.; Wegner, G.; Fang, X.;
            Chen, C. H.; Lieberwirth, I., <a href="papers/004.pdf">
            Determination of the diffusion coefficient of lithium ions
            in nano-Si</a>. <em>Solid State Ionics</em> 2009, 180, 222-225.
        </li>
        <li>
            Ding, N.; Fang, X.; Xu, J.; Yao, Y. X.; Zhu, J.; Chen,
            C. H., <a href="papers/003.pdf">
            Performance of lithium-ion cells with a gamma-ray radiated
            electrolyte</a>. <em>Journal of Applied Electrochemistry</em> 2009,
            39, 995-1001.
        </li>
        <li>
            Ding, N.; Feng, X. Y.; Liu, S. H.; Xu, J.; Fang, X.;
            Lieberwirth, I.; Chen, C. H., <a href="papers/002.pdf">
            High capacity and excellent cyclability of vanadium (IV) oxide
            in lithium battery applications</a>. <em>
            Electrochemistry Communications</em> 2009, 11, 538-541.
        </li>
        <li>
            Ding, N.; Liu, S. H.; Feng, X. Y.; Gao, H.; Fang, X.; Xu, J.;
            Tremel, W.; Lieberwirth, I.;
            Chen, C. H., <a href="papers/001.pdf">
            Hydrothermal growth and characterization of nanostructured
            vanadium-based oxides</a>, <em>Crystal Growth and Design
            </em> 2009,9 (4) , 1723-1728.
        </li>
    </ul>
 
    return <div>
        <navi.Top />
        <h2>Publications</h2>
        {list}
    </div>
}
