import * as React from 'react';
import Hello from './hello';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
const configureStore = require('redux-mock-store');
const mockStore = configureStore();

describe('Hello', () => {
    it('renders the correct text when no enthusiasm level is given', () => {
        const initialStore = {
            enthusiasm: {
                enthusiasmLevel: 3,
                name: 'Test',
            },
        };
        
        const store = mockStore({
            ...initialStore,
        });
    
        const hello = mount(
            <Provider store={store}>
                <Hello />
            </Provider>
        );
        expect(hello.find('.greeting').text()).toEqual('Hello Test!!!');
    });
});
