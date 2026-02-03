import "./layers-container-styles.css";
import SVGArray from "./utils.js";

function LayersContainer() {
    const handleClick = (e) => {
        // Check which circle was actually clicked
        const clickedElement = e.target;
        console.log(clickedElement);

        const clickedSVG = e.target.closest("svg");
        console.log(clickedSVG);

        const clickedDiv = e.target.closest("div");
        console.log(clickedDiv);
    };

    return (
        <div className="SVG-Container">
            <div className="SVG-Layer-Stack" onClick={handleClick}>
                {SVGArray.map((svg, index) => (
                    <div
                        key={index}
                        className="SVG-Layer"
                        style={{ pointerEvents: "none" }} // Add this
                        dangerouslySetInnerHTML={{ __html: svg }}
                    />
                ))}
            </div>
        </div>
    );
}
export default LayersContainer;
