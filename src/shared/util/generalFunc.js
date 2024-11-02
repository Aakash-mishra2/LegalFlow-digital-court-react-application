export const handleKeyPress = (e) => {
    const allowedKeys = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "Backspace",
        "ArrowLeft",
        "ArrowRight",
        "Delete",
    ];
    if (!allowedKeys.includes(e.key)) e.preventDefault();
};
