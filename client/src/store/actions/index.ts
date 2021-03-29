import * as alertActions from 'store/actions/alertActions'
import * as appActions from 'store/actions/appActions'
import * as listActions from 'store/actions/listActions'
import * as modalActions from 'store/actions/modalActions'
import * as todoActions from 'store/actions/todoActions'
import * as userActions from 'store/actions/userActions'

// eslint-disable-next-line
export default {
  ...alertActions,
  ...appActions,
  ...listActions,
  ...modalActions,
  ...todoActions,
  ...userActions,
}
