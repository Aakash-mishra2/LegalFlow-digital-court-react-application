import { useState } from "react";

export const TooltipContainer = ({ tooltipText, children, isChildElementDisabled = true }) => {
    const [tooltip, setTooltip] = useState({
        visible: false,
        text: "",
        x: 0,
        y: 0,
    });

    const handleMouseEnter = (e) => {
        const tipX = e.clientX;
        const tipY = e.clientY;

        setTooltip({
            visible: true,
            text: "Information text here!", // Customize your tooltip text
            x: tipX + 10, // Offset tooltip slightly from cursor
            y: tipY + 10,
        });
    };

    const handleMouseMove = (e) => {
        const tipX = e.clientX;
        const tipY = e.clientY;

        if (tooltip.visible) {
            setTooltip((prev) => ({
                ...prev,
                x: tipX - 10,
                y: tipY - 10,
            }));
        }
    };

    const handleMouseLeave = () => {
        setTooltip({
            ...tooltip,
            visible: false,
        });
    };

    return (
        <div
            className="bg-transparent inline relative"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {tooltip.visible && isChildElementDisabled && (
                <div
                    style={{
                        position: "absolute",
                        top: tooltip.y,
                        right: tooltip.x,
                        backgroundColor: "#333",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "4px",
                        pointerEvents: "none",
                        whiteSpace: "nowrap",
                        fontSize: "12px",
                    }}
                >
                    {tooltipText}
                </div>
            )}
        </div>
    )
}