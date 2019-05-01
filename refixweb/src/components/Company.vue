<template>
  <div class="container" id="company">
    <!-- {{company}} -->
    <div class="header">
      <h3 style="text-align:start; margin-bottom: 1em;">{{company.companyName}}</h3>
    </div>
    <div class="row">
      <div class="col-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
          alt="Image Company"
          id="imgCompany"
        >
      </div>
      <div class="col-8">
        <div id="address">{{company.companyDescription}}</div>
        <div id="button-group">
          <router-link to="/request">
            <a id="request">Request</a>
          </router-link>
          <router-link to="/message">
            <a id="contact">Contact</a>
          </router-link>
          
        </div>
      </div>
      <div class="portfolio">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
          alt="img port"
          class="port"
        >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
          alt="img port"
          class="port"
        >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
          alt="img port"
          class="port"
        >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
          alt="img port"
          class="port"
        >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
          alt="img port"
          class="port"
        >
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
}
#button-group {
  margin-top: 3em;
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