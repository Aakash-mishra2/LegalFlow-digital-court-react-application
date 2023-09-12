import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addAmount, reset } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = 0; //useSelector((state) => state.counter.count);
  const count2 = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <section>
        <p>{count}</p>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(addAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </section>
      <section>
        <p>{count2}</p>
        <div>
          <button onClick={() => dispatch({type: 'increment'})}>+</button>
          <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </div>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch({type: 'addValue', amount: Number(incrementAmount)})}>
          Add Amount 2
        </button>
        <button onClick={() => {
            setIncrementAmount(0);
            dispatch({type: 'reset'});
        }}>
        Reset 2
        </button>
      </section>
    </section>
  );
};

export default Counter;
