import * as svg from "./svg"

const jira = (props: svg.SVGProps) => {

    const {

        stroke,

        className,

        ...rest

    } = props
    return (
        <svg.SVG className={className} p="5px" width={props.width} height={props.height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path fill="#444444" d="M10.294 4.624c-0.96 0-1.737 0.777-1.737 1.739 0 0.96 0.777 1.739 1.737 1.739 0.961 0 1.737-0.779 1.737-1.739 0-0.962-0.776-1.739-1.737-1.739zM21.707 4.624c-0.96 0-1.737 0.777-1.737 1.739 0 0.96 0.776 1.739 1.737 1.739 0.958 0 1.737-0.779 1.737-1.739 0-0.962-0.779-1.737-1.737-1.739zM16.001 3.037c-0.96 0-1.737 0.776-1.737 1.739 0 0.96 0.777 1.739 1.737 1.739s1.737-0.779 1.737-1.739c0-0.963-0.776-1.739-1.737-1.739zM25.289 9.393c-1.176 0.45-2.371 0.791-3.461 1.045-0.222 0.052-0.402 0.217-0.477 0.415-0.794 2.176-2.823 4.247-4.951 6.418-0.085 0.082-0.205 0.188-0.4 0.188s-0.313-0.104-0.4-0.188c-2.128-2.17-4.156-4.235-4.951-6.41-0.075-0.198-0.254-0.364-0.476-0.415-1.091-0.254-2.288-0.606-3.463-1.056-0.063-0.024-0.129-0.036-0.194-0.036-0.118 0-0.232 0.037-0.329 0.111-0.151 0.115-0.229 0.301-0.211 0.481 0.18 1.809 0.895 3.578 2.185 5.432 1.213 1.743 2.795 3.356 4.324 4.916 2.818 2.875 5.48 5.589 5.714 8.738 0.021 0.284 0.258 0.504 0.543 0.504h3.311c0.149 0 0.291-0.061 0.394-0.169s0.157-0.253 0.149-0.402c-0.104-2.105-0.896-4.213-2.422-6.443-0.32-0.468-0.662-0.922-1.020-1.368-0.145-0.181-0.084-0.407 0.027-0.52 0.11-0.113 0.22-0.225 0.332-0.339 1.53-1.56 3.111-3.173 4.324-4.916 1.29-1.854 2.005-3.612 2.185-5.421zM12.448 22.741c-0.078-0.082-0.193-0.166-0.387-0.166-0.247 0-0.394 0.171-0.449 0.256-1.393 2.119-2.112 4.119-2.211 6.13-0.007 0.148 0.047 0.295 0.15 0.404s0.247 0.17 0.396 0.17h3.305c0.284 0 0.524-0.222 0.545-0.506 0.072-0.969 0.374-1.94 0.923-2.96 0.19-0.353 0.042-0.685-0.067-0.826-0.545-0.709-1.212-1.464-2.205-2.5zM16.004 11.091c1.037 0 1.639-0.063 1.851-0.063 0.256 0 0.501 0.21 0.501 0.504 0 0.086-0.020 0.147-0.040 0.201-0.138 0.368-0.765 1.692-1.933 2.827-0.131 0.127-0.279 0.151-0.382 0.151h-0.001c-0.102 0-0.25-0.024-0.381-0.151-1.168-1.135-1.795-2.459-1.932-2.827-0.020-0.054-0.041-0.115-0.041-0.201 0-0.294 0.245-0.504 0.501-0.504 0.211 0 0.813 0.063 1.85 0.063h0.007z"></path>

        </svg.SVG>


    )
}
export default jira