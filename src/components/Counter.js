import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state =>state.counter);

  const incrementHandler = () => {
    dispatch({type:'INCREMENT'});
  };
  const decrementHandler = () => {
    dispatch({type:'DECREMENT'});
  };

  const incrementby5Handler = () => {
    dispatch({type:'INCREMENTBY5'});
  };
  const decrementby5Handler = () => {
    dispatch({type:'DECREMENTBY5'});
  };



  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
      <button onClick={incrementby5Handler}>Incrementby5</button>
      <button onClick={decrementby5Handler}>Decrementby5</button>
      </div>

      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
