import * as svg from "./svg"
import * as layout from "../layouts"
import { ContainerProps } from "../layouts/style"
const echo3D = (props:ContainerProps) => {

    return (
        <layout.DIV height={props.height} width={props.width}>
            <img src="https://static.wixstatic.com/media/c42fea_b1e08549d3c24ed4ab07115ac5e0527f~mv2.png/v1/fill/w_288,h_46,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/echo3D%20-%20Logo%202021%20-%20Knockout.png" />

        </layout.DIV>
    )
}
export default echo3D