import * as React from 'react';
import renderer from 'react-test-renderer';
import ContentView from '../ContentView';

test('Render avatar view correctly', ()=>{
    const testContentView = renderer.create(<ContentView/>).toJSON();
    expect(testContentView).toMatchSnapshot();
})