import * as React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

test('Render App correctly', ()=>{
    const testApp = renderer.create(<App/>).toJSON();
    expect(testApp).toMatchSnapshot();
})