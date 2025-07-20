import { useMemo } from "react";

export default function OtpInput({ value, valueLength, onChange }) {
    const reg = new RegExp(/^[a-zA-Z0-9]+$/);
    const valueItems = useMemo(() => {
        const items = [];
        const reg = new RegExp(/^[a-zA-Z0-9]+$/);
        const valueArray = value.split("");

        for (let i = 0; i < valueLength; i++) {
            const char = valueArray[i];
            if (reg.test(char)) items.push(char);
            else items.push("");
        }
        return items;
    }, [value, valueLength]);

    function focusToNextInput(target) {
        const nextElementSibling = target.nextElementSibling;
        if (nextElementSibling) nextElementSibling.focus();
    }
    function focusToPrevInput(target) {
        const previousElementSibling = target.previousElementSibling;
        if (previousElementSibling) previousElementSibling.focus();
    }
    function inputOnChange(e, idx) {
        const target = e.target;
        let targetValue = target.value.trim();
        const isTargetValueDig = reg.test(targetValue);

        if (!isTargetValueDig && targetValue !== "") return;
        const nextInputEl = target.nextElementSibling;

        // only delete digit if next input element has no value
        if (!isTargetValueDig && nextInputEl && nextInputEl.value !== "") return;
        targetValue = isTargetValueDig ? targetValue : " ";

        const targetValueLen = targetValue.length;
        if (targetValueLen === 1) {
            const newValue =
                value.substring(0, idx) + targetValue + value.substring(idx + 1);
            onChange(newValue);

            if (!isTargetValueDig) return;
            focusToNextInput(target);
        } else if (targetValueLen === valueLength) {
            onChange(targetValue);
            target.blur(); // focus out of input box
        }
    }

    function keyDownHandler(e) {
        const { key } = e;
        const target = e.target;

        if (key === "ArrowRight" || key === "ArrowDown") {
            e.preventDefault();
            return focusToNextInput(target);
        }

        if (key === "ArrowLeft" || key === "ArrowUp") {
            e.preventDefault();
            return focusToPrevInput(target);
        }

        const targetValue = target.value;
        // if the same digit was typed
        target.setSelectionRange(0, targetValue.length);
        if (e.key !== "Backspace" || target.value !== "") return;
        focusToPrevInput(target);
    }
    function focusHandler(e) {
        const { target } = e;
        const prevElem = target.previousElementSibling;
        if (prevElem && prevElem.value === "") return prevElem.focus();
        target.setSelectionRange(0, target.value.length);
    }

    return (
        <div className={`flex mb-2 my-8  max-w-full justify-evenly gap-3`}>
            {valueItems.map((digit, idx) => (
                <input
                    key={idx}
                    type="text"
                    maxLength={valueLength}
                    className={"h-[3.8rem] w-full box-border border-[1px] border-gray-200 rounded-[16px] text-center text-lg text-black font-thin leading-[1px] focus:border-[1px] focus:ring-[2px] focus:primary-dark sm:h-16 sm:w-16 "}
                    value={digit}
                    onChange={(e) => inputOnChange(e, idx)}
                    onKeyDown={keyDownHandler}
                    onFocus={focusHandler}
                />
            ))}
        </div>
    );
}
