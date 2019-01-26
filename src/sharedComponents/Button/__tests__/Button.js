import * as React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

test('Render button correctly', ()=>{
    const testButton = renderer.create(<Button/>).toJSON();
    expect(testButton).toMatchSnapshot();
})