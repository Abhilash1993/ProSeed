import React from 'react';
import { Link } from 'react-router-dom';
import '../../utils/font.less';
import SidePanel from '../common/components/sidePanel/sidePanel';
import '../common/common.less';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        < SidePanel/>
        <div className = "content-root title">This is a About page.</div>
      </div>
    );
  }
  componentDidMount(){
    setTimeout(()=>{
      console.log("yess");
    },1000);
  }
}
