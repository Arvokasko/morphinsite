import "../styles/Hero.css"
import BlurText from "./BlurText"

export default function Hero() {
    return (
        <div className="heroContainer">
            <div className="textContainer">
                <h1 className="heroHeader">
                    <BlurText
                        text="Hero segment header"
                        delay={100}
                        stepDuration={0.4}
                        direction="top"
                        align="left"
                    />
                </h1>
                <p className="heroDesc" >
                    hero segment content here yayayayaa
                    hero segment content here yayayayaa
                    hero segment content here yayayayaa
                    hero segment content here yayayayaa
                    hero segment content here yayayayaa
                    hero segment content here yayayayaa
                </p>
            </div>
        </div>
    )
}