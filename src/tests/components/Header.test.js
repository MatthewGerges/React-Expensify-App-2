//how to virtually render component without rendering it in  browser
//react-test-renderer - allows us to render stuff in jsx
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header'
import {shallow} from 'enzyme';

//shallow only renders given component not child components
//shallow rendering and full dom rendering
// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />)
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
//     //tomatchSnapshot will always pass because it will be first time created so no comparison
//     //second time created - will fail if not same to first
//     console.log(renderer.getRenderOutput())
// })

//snapshot - allows us to check if header changes only at a particular point in time
//jest snapshot does not show anchor tag for navlink because only renders parents not children
//press u key to update snapshot - and make third navlink dissapear
//raf = request animation frame

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />)
    // expect(toJson(wrapper)).toMatchSnapshot()
    //No need to write toJson - already configured in jest.config
    expect(wrapper).toMatchSnapshot()
    //toJson just extracts and renders the meaningful stuff from the wrapper
    // expect(wrapper.find('h1').length).toBe(1);
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    //like document selector and jquery -selects class or type: '.button'
}) 