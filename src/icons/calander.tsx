import * as svg from "./svg"

const calander = (props: svg.SVGProps) => {

    const {

        stroke,

        className,

        ...rest

    } = props
    return (
        <svg.SVG className={className} width={props.width} height={props.height} viewBox="0 0 98.4 98.4" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <g id="Group_4" data-name="Group 4" transform="translate(-822.7 -241.5)">
                <path id="Path_52" data-name="Path 52" d="M899.4,254.3H833.6a8.92,8.92,0,0,0-8.9,8.9V329a8.92,8.92,0,0,0,8.9,8.9h65.8a8.92,8.92,0,0,0,8.9-8.9V263.2A8.92,8.92,0,0,0,899.4,254.3Z" fill="none" stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
                <line id="Line_25" data-name="Line 25" x2="21.2" transform="translate(842.6 283.7)" fill="none" stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
                <line id="Line_26" data-name="Line 26" x2="45.9" transform="translate(842.6 302)" fill="none" stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
                <line id="Line_27" data-name="Line 27" y2="19.6" transform="translate(853.6 243.5)" fill="none" stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
                <line id="Line_28" data-name="Line 28" y2="19.6" transform="translate(879.4 243.5)" fill="none" stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
            </g>
        </svg.SVG>


    )
}
export default calander