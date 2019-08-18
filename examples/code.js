import http from '../api/http.js'

export default {
  props: ['capchaName', 'phone'],
  data: {
    time: 60
  },
  methods: {
    async sub () {
      const { result: { code } } = await http(`/DocPt/sendSms?phone=${this.phone}&random=${Date.now()}`)

      this.$store.dispatch('saveCapchaData', {
        capchaName: this.capchaName,
        data: code
      })

      this.core()
    },
    core () {
      this.time--

      const intervalBundle = setInterval(() => {
        if (--this.time === 0) {
          clearInterval(intervalBundle)
          this.time = 60
        }
      }, 1000)
    }
  }
}
