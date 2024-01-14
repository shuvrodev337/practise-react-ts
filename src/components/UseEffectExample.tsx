import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      {/* {!hidden && <Counter />} */}
      {/* {!hidden && <Todo />} */}
      <button
        className="px-4 py-2 bg-blue-400 rounded-lg text-white"
        onClick={() => setHidden((prev) => !prev)}
      >
        {hidden ? "Show" : "Hide"}
      </button>
    </div>
  );
};

// cleanup using set interval
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("render");
      setCount((prev) => prev + 1);
    }, 2000);
    return () => {
      // This is a clean up function that stops memory leak.
      clearInterval(intervalId);
    };
  }, []);

  return <h1 className="p-6 border border-red-600">{count}</h1>;
};

// cleanup using fetch
const Todo = () => {
  const controller = new AbortController(); // https://developer.mozilla.org/en-US/docs/Web/API/AbortController
  // AbortController constructor fetch request cancel korte help kore
  // For axios https://axios-http.com/docs/cancellation
  const signal = controller.signal; // eta akta property, jeta feth er sathe , pass kora jay.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((response) => response.json())
      .then((data) => alert(data.title));
    return () => {
      controller.abort(); // method call, to abort a request and to stop memory leak.
    };
  }, []);
  return (
    <div>
      <h1>Todo</h1>
    </div>
  );
};
export default UseEffectExample;

//---------------------NOTES------------------//

//render: Browser e jokhon kono kich load hoy ba dekhay ba paint hoy. Overall package of different stages of renderring.

//event: event hocche kono action triggered by the user, ex: button click/type something.

//effect: kono akta component render howar maddhome/sathe sathe jodi kono kichu run kora shuru kore, tahole setake effect bole,
// ex: page load howar sathe sathe data fetch kore niye asa.useEffect er maddhome effect manage kora jay.
// React er baire outside kono kichu react er state diye manage korte chaile useEffect use kora hoy
// jamon kono side effect/ data fetch/ html er sathe interaction/ timer/ browser api niye kaj
// https://react.dev/learn/you-might-not-need-an-effect

// Cleanup function:  useEffect er function er vitor theke j function return kora hoy, seta k cleanup function bole.
// useFfect re-render hole, 1st e cleanup function run hobe , then useFeect er vitorer jinish run hobe

// Never use object as useeffect dependency.because object er refference change holei(value noy, only refference), useEffect run kore dey.
