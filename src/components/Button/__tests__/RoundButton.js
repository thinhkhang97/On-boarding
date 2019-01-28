import * as React from 'react';
import renderer from 'react-test-renderer';
import RoundButton from '../RoundButton';

test('Render round button correctly', ()=>{
    const testButton = renderer.create(<RoundButton/>).toJSON();
    expect(testButton).toMatchSnapshot();
})