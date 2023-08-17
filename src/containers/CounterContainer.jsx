import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = () => {
  //상태를 관리하는 Hook
  const {number, diff} = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));

  //디스패치 생성
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <div>
      <Counter number={number}
      diff={diff} onIncrease={onIncrease} 
      onDecrease={onDecrease} onSetDiff={onSetDiff}></Counter>
    </div>
  );
};

export default CounterContainer;