import * as svg from "./svg"

const degree = (props: svg.SVGProps) => {

    const {

        stroke,

        className,

        ...rest

    } = props
    return (
        <svg.SVG className={className} p="5px" width={props.width} height={props.height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <circle fill="none"  stroke={props.stroke} strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" strokeMiterlimit="10" cx="22" cy="19" r="4" />
            <polyline fill="none" stroke={props.stroke} strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" strokeMiterlimit="10" points="25,22 25,31 22,30 19,31 19,22 " />
            <line fill="none"   stroke={props.stroke} strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" strokeMiterlimit="10" x1="7" y1="11" x2="18" y2="11" />
            <line fill="none"  stroke={props.stroke} strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" strokeMiterlimit="10" x1="7" y1="15" x2="12" y2="15" />
            <polyline fill="none"  stroke={props.stroke} strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" strokeMiterlimit="10" points="19,26 3,26 3,6 29,6 29,26 25,26 " />
        </svg.SVG>


    )
}
export default degree