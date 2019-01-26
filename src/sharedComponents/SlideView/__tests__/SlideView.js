import * as React from 'react';
import renderer from 'react-test-renderer';
import SlideView from '../SlideView';

test('Render slide view correctly', ()=>{
    const testSlideView = renderer.create(<SlideView/>).toJSON();
    expect(testSlideView).toMatchSnapshot();
})