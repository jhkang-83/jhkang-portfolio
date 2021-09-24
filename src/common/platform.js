import { Platform } from '@newbiz/common-libs'

const platform = Platform.getInfo(navigator.userAgent)

export default {
  ...platform
}
