<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="6" justify="center" align="center" class="pt-16">
        <v-textarea
          placeholder="Input your cookie"
          label="Cookie"
          outlined
          hide-details
          v-model="cookie.data"
          class="mb-4"
        ></v-textarea>
        <v-combobox
          label="Sites"
          v-model="target"
          hide-details
          :items="sites"
          outlined
          dense
          class="mb-4"
        ></v-combobox>
        <v-btn block color="success" outlined @click="setCookie"
          >Go Go Go ...</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  created() {
    this.cookie.data = "example";
  },
  data() {
    return {
      welcomeText: "Xin chào, tôi là Luyện!",
      cookie: {
        data: ""
      },
      sites: ["https://www.freepik.com", "artlist.io"],
      target: ""
    };
  },
  methods: {
    setCookie() {
      var cookieName = "LuyenTran";
      var cookieValue = "asdjfhakljsdfhaksjhdfkljahsdfkljhaslkdfjhaskldjfh";
      var myDate = new Date();
      myDate.setMonth(myDate.getMonth() + 12);
      document.cookie = `${cookieName}"="${cookieValue}";expires="${myDate}";domain=${this.target};path=/"`;
      console.log(" document.cookie :", document.cookie);
    }
  }
};
</script>
