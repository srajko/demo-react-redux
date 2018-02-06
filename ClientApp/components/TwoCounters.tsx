import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as CounterStore from '../store/Counter';
import * as WeatherForecasts from '../store/WeatherForecasts';
import Counter from './Counter';

type CounterProps =
    RouteComponentProps<{}>;

export default class TwoCounters extends React.Component<CounterProps, {}> {
    public render() {
        return <div>
            <Counter index={0} />
            <Counter index={1} />
        </div>;
    }
}