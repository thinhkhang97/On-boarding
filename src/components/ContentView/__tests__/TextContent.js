import * as React from 'react';
import renderer from 'react-test-renderer';
import TextContent from '../TextContent';

test('Render avatar view correctly', ()=>{
    const testTextContent = renderer.create(<TextContent/>).toJSON();
    expect(testTextContent).toMatchSnapshot();
})