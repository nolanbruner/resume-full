import React, { useState } from "react";
import * as layouts from "../layouts"



function Services(props: { ismobile: boolean }) {

    if (props.ismobile) {
        return (
            <>
                <layouts.flex mt="30px">
                    <layouts.DIV>If you are looking to transform your lawn or request an estimate, then give us a call</layouts.DIV>
                    <h3>555-555-5555</h3>
                </layouts.flex>
            </>)
    }
    return (
        <>
            <layouts.DIV m="auto"  >
            <h1>Hydroseeding Services</h1>

<p>Welcome to our hydroseeding services! We offer a range of solutions to meet your landscaping, construction, and environmental restoration needs. Our hydroseeding services provide numerous benefits for establishing healthy and vibrant vegetation quickly and efficiently.</p>

<h2>Lawn Establishment</h2>
<p>We specialize in hydroseeding for residential and commercial properties. Our method ensures a cost-effective and uniform coverage of large areas, resulting in lush and healthy lawns.</p>

<h2>Erosion Control</h2>
<p>Count on us for effective erosion control solutions. Hydroseeding stabilizes soil on slopes, embankments, and construction sites, preventing erosion caused by wind or water runoff. Our mulch-enriched mixtures provide a protective layer for optimal soil stability.</p>

<h2>Land Reclamation</h2>
<p>Revitalize disturbed lands with our land reclamation services. Hydroseeding is a key component of our rehabilitation approach, promoting the restoration of vegetation in areas impacted by construction, mining, or other activities.</p>

<h2>Wildlife Habitat Restoration</h2>
<p>Join us in contributing to wildlife habitat restoration projects. Our hydroseeding services help reintroduce native plant species, creating environments that support diverse ecosystems.</p>

<h2>Custom Solutions</h2>
<p>We understand that each project is unique. Our hydroseeding services allow for custom seed mixtures tailored to your specific requirements, including soil conditions, climate, and desired plant species.</p>

<h2>Why Choose Hydroseeding?</h2>
<ul>
    <li>Quick Establishment</li>
    <li>Erosion Control</li>
    <li>Uniform Coverage</li>
    <li>Cost-Effective</li>
    <li>Water Conservation</li>
</ul>

<p>Contact us today to discuss how our hydroseeding services can benefit your project. We look forward to helping you achieve green, sustainable, and thriving landscapes!</p>
</layouts.DIV>
            {/* <div >HPH is based out of Cincinnati Ohio and will serve the Tri-state and beyond.</div>
                <br/><div>We can offer other grading and soil prep services.  At this point we subcontract some of these out to our service partners so that we can concentrate on what we do best – grow grass fast.</div>
            </layouts.DIV> */}
        </>)
}
export default Services