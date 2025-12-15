import "../styles/Start.css"
import BlurText from "./BlurText"


export default function Start() {
    return (
        <div className="startContainer">
            <div className="textContainer" >
                <h1 className="startHeader">
                    <BlurText
                        text="Last segment header"
                        delay={100}
                        stepDuration={0.4}
                        direction="top"
                        align="right"
                    />
                </h1>
                <p className="startDesc" >stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff </p>
            </div>
        </div>
    )
}