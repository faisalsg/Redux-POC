import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../Actions';

import ProfileScreen from './ProfileScreen';

function mapStateToProps(state) {
  return {data:state.dataReducer._data};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
