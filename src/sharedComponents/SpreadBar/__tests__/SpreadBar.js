import * as React from 'react';
import renderer from 'react-test-renderer';
import SpreadBar from '../SpreadBar';

test('Render spread bar correctly', ()=>{
    const testSpreadBar = renderer.create(<SpreadBar/>).toJSON();
    expect(testSpreadBar).toMatchSnapshot();
})