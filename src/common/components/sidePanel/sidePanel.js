import React from 'react';
import {connect} from 'react-redux';
import ACTION from '../../action_constants';
import {Link} from 'react-router-dom';
import './sidePanel.less';

class SidePanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="side-bar-root">
                <div className="menu">Menu</div>
                <div className="menu-item"><Link to="/about" >SIDE 1</Link></div>
                <div className="menu-item"><Link to="/" >SIDE 2</Link></div>
                <div className="menu-item"><Link to="/route1" >SIDE 3</Link></div>
            </div>
        );
    }
    componentDidMount() {
    }
}

// const mapStateToProps = state => {
//     return {home: state.home};
// };

// export default connect(mapStateToProps)(Home);
export default SidePanel;