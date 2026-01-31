import "./layers-container-styles.css";
import SVGArray from "./utils.js";

function LayersContainer() {
    return (
        <div className="SVG-Container" style={{ position: "relative" }}>
            <div className="SVG-Layer-Stack">
                {SVGArray.map((svg, index) => (
                    <div
                        key={index}
                        className="SVG-Layer"
                        dangerouslySetInnerHTML={{ __html: svg }}
                    />
                ))}
            </div>
        </div>
    );
}

export default LayersContainer;
