import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addAmount, reset, toggleCounter } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
      <section>
      <h1>Counter is here</h1>
        {showCounter && <p>{count}</p>}
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(addAmount({ value: addValue, }))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
        <button onClick={() => dispatch(toggleCounter())}>Toggle</button>
      </section>
  );
};

export default Counter;
