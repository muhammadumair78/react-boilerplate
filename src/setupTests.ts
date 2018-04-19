import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};
(global as any).localStorage = localStorageMock;
Enzyme.configure({ adapter: new Adapter() });