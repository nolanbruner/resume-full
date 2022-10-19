import React, { useState } from "react";
import Toolbar from "../layouts/Toolbar";
import * as layouts from "../layouts"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import resumePDF from "../assets/Resume2022.pdf"

export const download = () => {
    let alink = document.createElement('a');
    alink.href = resumePDF;
    alink.download = 'NolanBrunerPDF.pdf';
    alink.click();
}
function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: any) {
        setNumPages(numPages);
    }


    return (
        <>



            <layouts.flex m="auto">
                <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
            </layouts.flex>


        </>)
}
export default Resume