<template>
  <div class="container" id="company">
    <!-- {{company}} -->
    <div class="header">
      <h3 style="text-align:start; margin-bottom: 1em;">{{company.companyName}}</h3>
    </div>
    <div class="row">
      <div class="col-4">
        <img
          :src="company.companyLogo"
          alt="Image Company"
          id="imgCompany"
        >
      </div>
      <div class="col-8">
        <div id="address">{{company.companyDescription}}</div>
        <div id="button-group">
          <router-link to="/request">
          <div class="btn btn-outline-primary">Request</div>
          </router-link>
          <div class="btn btn-outline-info ml-3" @click="addContact(company)">Contact</div>
        </div>
      </div>
      <div class="portfolio">
        <template v-for="(pict, index) in company.companyPictures">
          <img
          :src="pict"
          alt="img port"
          class="port"
          :key="index"
        >
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Company",
  computed: {
    company: {
      get() {
        return this.$store.getters["getCompany"];
      }
    },
    currentUser: {
      get() {
        return this.$store.getters["getCurrentUser"];
      }
    }
  },
  methods: {
    addContact(compa) {
      this.$http
        .get("https://contact-dot-refixsoa2019.appspot.com/api/contact")
        .then(response => {
          return response.json();
        })
        .then(data => {
          let isRoomExisted = false;
          for (let key in data) {
            if (
              data[key].customerId == this.currentUser.ID &&
              data[key].companyId == compa.companyId
            ) {
              isRoomExisted = true;
            }
          }
          if (!isRoomExisted) {
            let contactObject = {
              companyId: compa.companyId,
              companyName: compa.companyName,
              customerId: this.currentUser.ID,
              customerName: this.currentUser.name,
              chat: []
            };
            this.$http
              .post(
                "https://contact-dot-refixsoa2019.appspot.com/api/contact",
                contactObject
              )
              .then(() => {
                console.log("created room");
                console.log(contactObject);
                this.$router.push("/message");
              });
          } else {
            this.$router.push("/message");
          }
        });
    }
  }
};
</script>

<style>
#company {
  font-family: "Playfair Display", serif;
  margin-top: 20px;
}
#imgCompany {
  max-width: 300px;
  max-height: 300px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
.port {
  margin-left: 15px;
  margin-top: 2em;
  max-width: 130px;
  max-height: 130px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  background-color: aquamarine;
}
#button-group {
  margin-top: 5em;
}
.button {
  color: #0e79f5;
  border: 2px solid #0e79f5;
  background-color: #fff;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  letter-spacing: 0.012px;
}
.button:hover {
  color: #0e79f5;
  text-decoration: none;
}
#contact {
  margin-left: 2em;
  color: #ffffff;
  border: 2px solid #0e79f5;
  background-color: #0e79f5;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  letter-spacing: 0.012px;
}
#request {
  margin-left: 2em;
  color: #0e79f5;
  border: 2px solid #0e79f5;
  background-color: #fff;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  letter-spacing: 0.012px;
}
a:hover {
  text-decoration: none;
}
</style>