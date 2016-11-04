import * as components from 'components'

export default (function () {
  var DEF_DATA = {}
  return {
    data () {
      return {
        // loading:  false,
        // error:''
      }
    },
    components: components,
    ready () {
      DEF_DATA = JSON.parse(JSON.stringify(this.$data))
    },
    methods: {
      clear (resetData) {
        Object.assign(DEF_DATA, resetData)
        for (let prop in DEF_DATA) {
          this[prop] = DEF_DATA[prop]
        }
      }
    }
  }
})()
