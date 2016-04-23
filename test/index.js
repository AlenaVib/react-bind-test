import React from 'react';
import {mount} from 'enzyme';

import HelloWorld from '../src';

describe('HelloWorld', () => {
  it("can be rendered", () => {
    let comp = mount(<HelloWorld/>);
    expect(comp.text().toLowerCase()).toBe('hello world!');
  });
});