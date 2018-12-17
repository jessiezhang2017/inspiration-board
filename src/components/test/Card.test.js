import React from 'react';
import Card from '../Card';
import {shallow} from 'enzyme';
// import App from './App';

describe('card',()=>{
  it('will match the Card Snapshot', ()=>{
    const wrapper = shallow(<Card
      text="go"
      emoji="heart_eyes"
      key={1}
      id={1}
      deleteCardCallback={()=>{}}

      />);
    expect(wrapper).toMatchSnapshot();
  });


});
