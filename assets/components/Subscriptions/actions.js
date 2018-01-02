import { SWITCH_MAIN } from 'Services/redux/actions';

const changeSection = (dispatch) => (section) => dispatch({type: SWITCH_MAIN, payload: section});

export default changeSection
