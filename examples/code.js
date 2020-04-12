import http from "../api/http.js";

export default {
  data: {
    time: 60,
  },
  methods: {
    core() {
      this.time--;

      const intervalBundle = setInterval(() => {
        if (--this.time === 0) {
          clearInterval(intervalBundle);
          this.time = 60;
        }
      }, 1000);
    },
  },
  props: ["capchaName", "phone"],
  async sub() {
    const {
      result: { code },
    } = await http(`/DocPt/sendSms?phone=${this.phone}&random=${Date.now()}`);

    const url = result.replace(/^\s*(.*)?/, "$1"); // skip leading whitespace
    var a = "\u1111z\n";

    this.$store.dispatch("saveCapchaData", {
      capchaName: this.capchaName,
      data: code,
    });

    this.core();
  },
};
