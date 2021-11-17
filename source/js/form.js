const Form = {
  data() {
    return {
      form: {
        name: "",
        phone: null,
        email: "",
        agree: false,
        currentRange: 3000,
      },
      minRange: 0,
      maxRange: 7000,
      startRange: 500,
      rangeSection: 1000,
      actionStatus: false,
    };
  },
  methods: {
    async formSubmit() {
      if (this.formIsValid) {
        const res = await fetch("/form-sending", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.form.name,
            phone: this.form.phone,
            email: this.form.email,
            agree: this.form.agree,
            currentRange: this.form.currentRange,
          }),
        });
        if (res.status !== 200 || res.status !== 201) {
          alert("Status error " + res.status);
        }
      }
    },

    validEmail(email) {
      const emailPattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailPattern.test(email);
    },
    handlerSubmitOn() {
      return (this.actionStatus = !this.actionStatus);
    },
  },
  computed: {
    rangeValueMove() {
      return {
        left: `calc(${(this.form.currentRange * 100) / this.maxRange}% - 50px`,
      };
    },

    nameIsValid() {
      return (
        !!this.form.name &&
        this.form.name.length > 5 &&
        this.form.name.length < 120
      );
    },
    phoneIsValid() {
      return typeof this.form.phone === "number";
    },
    emailIsValid() {
      return this.validEmail(this.form.email);
    },

    agreeIsValid() {
      return this.form.agree;
    },

    formIsValid() {
      return (
        this.nameIsValid &&
        this.phoneIsValid &&
        this.emailIsValid &&
        this.agreeIsValid
      );
    },

    actionStatusActive() {
      return this.actionStatus;
    },
  },
}

Vue.createApp(Form).mount("#form")
