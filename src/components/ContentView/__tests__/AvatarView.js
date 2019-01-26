import * as React from 'react';
import renderer from 'react-test-renderer';
import AvatarView from '../AvatarView';

test('Render avatar view correctly', ()=>{
    const testAvatarView = renderer.create(<AvatarView/>).toJSON();
    expect(testAvatarView).toMatchSnapshot();
})