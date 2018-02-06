import { Action, Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface CounterState {
    counts: number[];
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

interface IncrementCountAction { type: 'INCREMENT_COUNT', index: number, by: number }
interface DecrementCountAction { type: 'DECREMENT_COUNT', index: number, by: number }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = IncrementCountAction | DecrementCountAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    increment: (index: number, by: number) => <IncrementCountAction>{ type: 'INCREMENT_COUNT', index, by }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<CounterState> = (state: CounterState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'INCREMENT_COUNT':
            {
                const countsCopy = state.counts.slice();
                countsCopy[action.index] += action.by;
                return { counts: countsCopy };
            }
        case 'DECREMENT_COUNT':
            {
                const countsCopy = state.counts.slice();
                countsCopy[action.index] += action.by;
                return { counts: countsCopy };
            }
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || { counts: [0, 0] };
};
