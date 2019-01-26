import * as React from 'react';
import renderer from 'react-test-renderer';
import Avatar from '../Avatar';

test('Render avatar correctly', ()=>{
    const testAvatar = renderer.create(<Avatar/>).toJSON();
    expect(testAvatar).toMatchSnapshot();
})