import Navbar from '../Navbar';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Navbar', () => {
  it('should be requireable', () => {
    expect(Navbar).toBeDefined();
  });

  it('should match snapshot', () => {
    const wrapper = mount(<Navbar />);
    const renderedComp = wrapper.render();
    expect(renderedComp).toMatchSnapshot();
  });
});
