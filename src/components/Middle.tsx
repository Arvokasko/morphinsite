import "../styles/Middle.css"
import BlurText from "./BlurText"

export default function Middle() {
    return (
        <div className="middleContainer">
            <div className="textContainer">
                <h1 className="middleHeader">
                    <BlurText
                        text="Middle segment header"
                        delay={100}
                        stepDuration={0.4}
                        direction="top"
                        align="center"
                    />
                </h1>
                <p className="middledesc" >asfduhioasdfuhio huifdshuioo hiuodf suhio asdfhiou asdfhuio asdfhoui asdfhoui asdfuhio </p>
            </div>
        </div>
    )
}