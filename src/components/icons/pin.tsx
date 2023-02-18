import * as svg from "./svg"

const pin = (props: svg.SVGProps) => {

    const {

        stroke,

        className,

        ...rest

    } = props
    return (
        <svg.SVG className={className} width={props.width} height={props.height} viewBox="0 0 492 492" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <g>
                <path id="XMLID_152_" d="M246.181,0C127.095,0,59.533,102.676,84.72,211.82c17.938,77.722,126.259,280.631,161.462,280.631
	c32.892,0,143.243-202.975,161.463-280.631C432.996,103.74,365.965,0,246.181,0z M246.232,224.97
	c-34.38,0-62.244-27.863-62.244-62.244c0-34.381,27.864-62.244,62.244-62.244c34.38,0,62.244,27.863,62.244,62.244
	C308.476,197.107,280.612,224.97,246.232,224.97z"/>
            </g>
        </svg.SVG>


    )
}
export default pin