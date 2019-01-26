import * as React from 'react';
import renderer from 'react-test-renderer';
import MixTitle from '../MixTitle';

test('Render mix title correctly', ()=>{
    const testMixTitle = renderer.create(<MixTitle/>).toJSON();
    expect(testMixTitle).toMatchSnapshot();
})