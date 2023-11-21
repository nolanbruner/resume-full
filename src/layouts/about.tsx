
import * as layouts from "./"

import * as icons from "../icons"
const about = (props: { color: string }) => {
    return (

        <layouts.DIV width="90%" ml="3vw" fontFamily="sans-serif">
            <layouts.statement p="10px" color={props.color} fontWeight="" fontSize="25px" >
                <h3>About Us</h3>
                <br /><div>Our services are simple.  Hydroseeding.  We work with you directly to find the best mixture for your project. </div>
                <br />
                <div>Hydroseeding is a method of planting grass or other seeds that involves spraying a mixture of seed, fertilizer, mulch, and water onto the soil. It's often used to quickly and efficiently establish vegetation on large areas, such as lawns, slopes, or construction sites. The mixture is called a slurry.</div>
                {/* <div>HPH was started to fill a growing void in the landscape and turf industry in the area.  Our division is headed by Jack Mazza.  After working for a Landscape company in Northern Kentucky and with a Sod farm in Cincinnati, Jack has taken his love for outdoor environments and entrepreneurship to the next level.  HPH is powered by projectWALLICO which has been a leader in labor and project management and a proven business leader with several companies over the last 30 years.</div> */}
                <br />
                <layouts.DIV>Benifits of Hydro Seeding</layouts.DIV>
                <ul>
                    <li>Quick Establishment: It allows for rapid coverage of large areas.</li>
                    <li>Erosion Control: The mulch in the mixture helps prevent soil erosion.</li>
                    <li>Uniform Coverage: The spraying process ensures an even distribution of seeds and nutrients.</li>
                    <li>Cost-Effective: It can be more cost-effective than traditional methods like laying sod.</li>
                </ul>
                {/*  <div>Jack resides in Cincinnati but loves to spend time hiking, boating and spending time with the family at the lake.  Jack attended Elder High School and  the University of Kentucky.</div>
                <br/>
                <div >HPH is based out of Cincinnati Ohio and will serve the Tri-state and beyond.</div>
                <br/><div>We can offer other grading and soil prep services.  At this point we subcontract some of these out to our service partners so that we can concentrate on what we do best – grow grass fast.</div>
                 <layouts.DIV p="10px" pl = "35px" >Degree: B.S. in Computer Science</layouts.DIV>
                <layouts.DIV pl = "35px" p="10px"> College: University of Kentucky </layouts.DIV>
                <layouts.DIV pl = "35px" p="10px">Minors: Mathmatics, Philosophy</layouts.DIV>
                <layouts.DIV pl = "35px">Activities: Hiking, Snowboarding, Golfing, Fishing</layouts.DIV> */}

            </layouts.statement>
            {/* <layouts.statement fontWeight="bold">
            Currently Working with
            </layouts.statement>
            <layouts.grid width="100%" >
                <icons.js width="100px" p="10px" />
                <icons.mongo width="100px" p="10px" />
                <icons.reacticon width="100px" height="100px" />
                <icons.nodejs width="100px" height="100px" p="10px" />
                <icons.html width="100px" p="10px" />
                <a href="https://github.com/"><icons.github width="100px" p="10px" /></a>
                <icons.styled  width="100px" p="10px" />
            </layouts.grid>
            <layouts.statement fontWeight="bold">
            Previously Used
            </layouts.statement>
            <layouts.grid>
                <icons.swift width="100px" p="10px" />
                <icons.java width="100px" p="10px" />
                <icons.php width="100px" p="10px" />
                <icons.gitlab width="100px" p="10px" />
                <icons.jira color={props.color} height="100px" p="10px" />
                <icons.python width="100px" p="10px" />
                <icons.mysql width="100px" p="10px" />
            </layouts.grid> */}
        </layouts.DIV>

    )
}
export default about