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

export function toTitleCase(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function convertToMaskedFormat(input) {
    if (!input || input.length < 4) {
        throw new Error("Input string is too short.");
    }
    if (Array.isArray(input) && input.length > 0) {
        const last4Digits = input.slice(-4).toUpperCase(); // Get the last 4 characters
        return `XXXXX${last4Digits}`;
    }
    if (typeof input === 'string') {
        const last4Digits = input.slice(-4).toUpperCase(); // Get the last 4 characters
        return `XXXXX${last4Digits}`;
    }
    throw new Error("Input must be a string or array with length > 0.");
}
