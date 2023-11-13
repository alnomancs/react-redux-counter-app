import "./App.css";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className=" m-96 p-24 border rounded-full flex flex-col justify-center items-center text-5xl">
        <h1 className="bg-emerald-200 border rounded p-5 ">Counter App</h1>
        <div className="flex p-4">
          <button
            type="button"
            className="rounded-full p-10 border-8 border-green-300 bg-green-100 "
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <p className="p-10 ">{count}</p>
          <button
            type="button"
            className="rounded-full p-10 border-8 border-green-300 bg-green-100"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="rounded-full p-10 border-8 border-green-300 bg-green-100"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
    </>
  );
}

export default App;
