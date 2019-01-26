import * as React from 'react';
import renderer from 'react-test-renderer';
import Spread from '../Spread';

test('Render spread correctly', ()=>{
    const testSpread = renderer.create(<Spread/>).toJSON();
    expect(testSpread).toMatchSnapshot();
})