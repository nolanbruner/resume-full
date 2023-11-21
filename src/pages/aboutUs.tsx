import React, { useState } from "react";
import * as layouts from "../layouts"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import resumePDF from "../assets/NolanBrunerResume.pdf"
import { phone } from "../icons";

export const download = () => {
    let alink = document.createElement('a');
    alink.href = resumePDF;
    alink.download = 'NolanBrunerPDF.pdf';
    alink.click();
}
function AboutUs(props: { ismobile: boolean }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: any) {
        setNumPages(numPages);
    }

    if (props.ismobile) {
        return (
            <>
                <layouts.flex mt="30px">
                    <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess} >
                        <Page pageNumber={pageNumber} width={400} />
                    </Document>
                </layouts.flex>
            </>)
    }
    return (
        <>
            <layouts.DIV m="auto" >
               <layouts.DIV textAlign="center"><h3>Contact Us!</h3></layouts.DIV>
               <layouts.DIV>If you are looking to transform your lawn or request an estimate, then give us a call</layouts.DIV>
               <layouts.DIV> HPH is based out of Cincinnati Ohio and will serve the Tri-state and beyond.</layouts.DIV>
               {/* <layouts.DIV>HPH was started to fill a growing void in the landscape and turf industry in the area.  Our division is headed by Jack Mazza.  After working for a Landscape company in Northern Kentucky and with a Sod farm in Cincinnati, Jack has taken his love for outdoor environments and entrepreneurship to the next level.  HPH is powered by projectWALLICO which has been a leader in labor and project management and a proven business leader with several companies over the last 30 years.</layouts.DIV> */}
                {/* <layouts.DIV>We can offer other grading and soil prep services.</layouts.DIV> */}
                <layouts.DIV textAlign="center">
               <h3>555-555-5555</h3>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396122.6231607026!2d-84.87004662335156!3d39.13587580090069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884051b1de3821f9%3A0x69fb7e8be4c09317!2sCincinnati%2C%20OH!5e0!3m2!1sen!2sus!4v1698277858009!5m2!1sen!2sus" width="600" height="450"  loading="lazy" ></iframe>
            </layouts.DIV>
            </layouts.DIV>
        </>)
}
export default AboutUs