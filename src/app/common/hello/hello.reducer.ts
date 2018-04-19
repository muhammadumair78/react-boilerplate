import { EnthusiasmAction } from './hello.actions';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from './hello.constants';

export interface EnthusiasmI {
    name: string;
    enthusiasmLevel: number;
}

const initialState: EnthusiasmI = {
    enthusiasmLevel: 5,
    name: 'Typescript Ji',
};

export function enthusiasm(state: EnthusiasmI = initialState, action: EnthusiasmAction): EnthusiasmI {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default:
            return state;
    }
}