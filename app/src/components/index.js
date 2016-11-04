const components = {}
var req = require.context('./', true, /^(.*\.(vue$))[^.]*$/igm)
req.keys().forEach(function (key) {
  var _key = key.replace('./', '').replace('.vue', '')
  components['v-' + _key] = req(key)
})
module.exports = components
