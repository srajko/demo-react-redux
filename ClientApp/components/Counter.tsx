import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as CounterStore from '../store/Counter';
import * as WeatherForecasts from '../store/WeatherForecasts';

interface PassedCounterProps {
    index: number,
    incrementByIndex?: number
};

type CounterProps =
    PassedCounterProps
    & CounterStore.CounterState
    & typeof CounterStore.actionCreators;

class Counter extends React.Component<CounterProps, {}> {
    public render() {
        const { index, incrementByIndex, counts, increment } = this.props;
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{ counts[index] }</strong></p>

            <button onClick={ () => increment(index, incrementByIndex !== undefined ? counts[incrementByIndex] : 1) }>Increment</button>
        </div>;
    }
}

// Wire up the React component to the Redux store
export default connect<CounterStore.CounterState, typeof CounterStore.actionCreators, PassedCounterProps>(
    (state: ApplicationState) => state.counter, // Selects which state properties are merged into the component's props
    CounterStore.actionCreators                 // Selects which action creators are merged into the component's props
)(Counter);