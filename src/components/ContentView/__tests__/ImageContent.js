import * as React from 'react';
import renderer from 'react-test-renderer';
import ImageContent from '../ImageContent';

test('Render avatar view correctly', ()=>{
    const testImageContent = renderer.create(<ImageContent/>).toJSON();
    expect(testImageContent).toMatchSnapshot();
})