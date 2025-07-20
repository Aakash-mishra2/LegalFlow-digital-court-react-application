export const Button = ({
    id,
    type,
    handler,
    disabled,
    children,
    className,
}) => {
    return (
        <button
            id={id}
            onClick={handler}
            disabled={disabled}
            type={type || "button"}
            className={`flex justify-center gap-1 items-center cursor-none lg:cursor-pointer transition-all ease-in-out duration-300 ${className}`}
        >
            {children}{" "}
        </button>
    );
};

export default Button;
