import * as alertActionCreators from 'store/actionCreators/alert'
import * as appActionCreators from 'store/actionCreators/app'
import * as listActionCreators from 'store/actionCreators/list'
import * as modalActionCreators from 'store/actionCreators/modal'
import * as todoActionCreators from 'store/actionCreators/todo'
import * as userActionCreators from 'store/actionCreators/user'

// eslint-disable-next-line
export default {
  ...alertActionCreators,
  ...appActionCreators,
  ...listActionCreators,
  ...modalActionCreators,
  ...todoActionCreators,
  ...userActionCreators,
}
