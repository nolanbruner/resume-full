
const circle1 = (props: { height: string, width: string }) => {
    return (
        <svg width={props.width} height={props.height}>
            <filter id="blur">
                <feGaussianBlur stdDeviation="2" />
            </filter>
            <circle cx="160" cy="160" r="80" stroke="none" stroke-width="4" fill="rgb(255,0,0)" filter="url(#blur)" />
            </svg>

    )
}
const circle2 = (props: { height: string, width: string }) => {
    return (
        <svg width={props.width} height={props.height}>
            <filter id="blur">
                <feGaussianBlur stdDeviation="0" />
            </filter>
            <circle cx="160" cy="160" r="80" stroke="blue" stroke-width="4" fill="rgb(0,255,0)" filter="url(#blur)" />
        </svg>

    )
}
const circle3 = (props: { height: string, width: string }) => {
    return (
        <svg width={props.width} height={props.height}>
            <filter id="blur">
                <feGaussianBlur stdDeviation="2" />
            </filter>
            <circle cx="120" cy="120" r="40" stroke="red" stroke-width="4" fill="rgb(0,0,255)" filter="url(#blur)" />


        </svg>

    )

}
const circle4 = (props: { height: string, width: string }) => {
    return (
        <svg width={props.width} height={props.height}>
            <filter id="blur">
                <feGaussianBlur stdDeviation="15" />
            </filter>
            <circle cx="500" cy="160" r="140" stroke="none" stroke-width="4" fill="rgb(255,0,0)" filter="url(#blur)" />
            <circle cx="600" cy="320" r="140" stroke="blue" stroke-width="4" fill="rgb(0,255,0)" filter="url(#blur)" />
            <circle cx="320" cy="320" r="140" stroke="red" stroke-width="4" fill="rgb(0,0,255)" filter="url(#blur)" />


        </svg>

    )
    
}
export  {circle1,circle2,circle3,circle4}