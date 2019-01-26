import * as React from 'react';
import renderer from 'react-test-renderer';
import Description from '../Description';

test('Render button correctly', ()=>{
    const testDescription = renderer.create(<Description/>).toJSON();
    expect(testDescription).toMatchSnapshot();
})