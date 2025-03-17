import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state =>state.counter.counter);
  const showCounter = useSelector(state =>state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementby5Handler = () => {
    dispatch(counterActions.increase(5));
  };
  const decrementby5Handler = () => {
    dispatch(counterActions.decrease(5));
  };



  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    
       <main className={classes.counter}>
      
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
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
