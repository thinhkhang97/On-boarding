import * as React from 'react';
import renderer from 'react-test-renderer';
import Title from '../Title';

test('Render title correctly', ()=>{
    const testTitle = renderer.create(<Title/>).toJSON();
    expect(testTitle).toMatchSnapshot();
})