import * as React from 'react';
import renderer from 'react-test-renderer';
import SlideItem from '../SlideItem';

test('Render slide item correctly', ()=>{
    const testSlideItem = renderer.create(<SlideItem/>).toJSON();
    expect(testSlideItem).toMatchSnapshot();
})