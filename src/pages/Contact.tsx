import React, { useState } from "react";
import * as layouts from "../layouts"



function Contact(props: { ismobile: boolean }) {

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
            <layouts.DIV m="auto" textAlign="center" >
               <h1>Contact Us!</h1>
               <layouts.DIV>If you are looking to transform your lawn or request an estimate, then give us a call</layouts.DIV>
               <h3>555-555-5555</h3>
            </layouts.DIV>
        </>)
}
export default Contact