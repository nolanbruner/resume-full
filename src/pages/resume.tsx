import React, { useState } from "react";
import * as layouts from "../layouts"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import resumePDF from "../assets/NolanBrunerResume.pdf"

export const download = () => {
    let alink = document.createElement('a');
    alink.href = resumePDF;
    alink.download = 'NolanBrunerPDF.pdf';
    alink.click();
}
function Resume(props: { ismobile: boolean }) {
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
            <layouts.flex m="auto">
                <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess} >
                    <Page pageNumber={pageNumber}  />
                </Document>
            </layouts.flex>
        </>)
}
export default Resume