import * as svg from "./svg"

const degree = (props: svg.SVGProps) => {

    const {

        stroke,

        className,

        ...rest

    } = props
    return (
        <svg.SVG className={className} p="5px" width={props.width} height={props.height} fill={props.fill} viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path d="M219.03 0v464.314h-56.515c-31.196 0-56.515 25.299-56.515 56.47 0 31.172 25.319 56.47 56.515 56.47h56.514v338.824h-56.514c-31.196 0-56.515 25.3-56.515 56.471 0 31.172 25.319 56.47 56.515 56.47h56.514v338.824h-56.514c-31.196 0-56.515 25.299-56.515 56.47 0 31.172 25.319 56.471 56.515 56.471h56.514V1920h1582.412V0H219.03Zm960.578 338.824v112.94H671.373v677.648h677.647V734.118h112.94v508.235H558.432v-903.53h621.177Zm207.326 75.817 79.85 79.85-432.452 432.451-224.866-224.979 79.85-79.85 145.016 145.13 352.602-352.602Z" fillRule="evenodd" />
        </svg.SVG>


    )
}
export default degree