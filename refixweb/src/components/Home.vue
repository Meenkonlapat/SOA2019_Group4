<template>
  <div class="container" id="home">
    <p> temporary code for testing only :3 </p>
    company category is : {{ companyCategory }}
    <button @click="setCompanyCategory('ant')">ant</button>
    <button @click="setCompanyCategory('bird')">bird</button>
    <div class="device">
      <div class="header">
        <h3 style="text-align:start">Appliance</h3>
      </div>
      <div class="in-card row" style="height: 325;">
        <router-link to="/company">
          <div
            class="card card-info"
            style="width: 13rem; height: 19.5rem"
            v-for="compa in company"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
              class="card-img-top"
              alt="Image company"
            >
            <div class="card-body">
              <h5 class="card-title">{{compa.companyName}}</h5>
              <p class="card-text">{{compa.description}}</p>
            </div>
          </div>
        </router-link>

        <!--  -->
        <router-link to="/all">
          <div class="card card-info final-card" style="width: 13rem; height: 19.5rem;">
            <div
              class="top"
              style="position:absolute; top:0; left:0; width:100%; height:100%; background-color:black; z-index:2; opacity:0.3;"
            ></div>
            <div
              style="position:absolute; top:0; left:0; width:100%; height:100%; color:white; z-index:2; font-size: 24px; display: flex; align-items: center; justify-content: center;"
            >
              <h3>See more +</h3>
            </div>
            <div
              class="inside"
              style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
                class="card-img-top"
                alt="Image company"
              >
              <div class="card-body">
                <h5 class="card-title">ABC Home Inc.</h5>
                <p class="card-text">Location: Bangkok</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="electronic">
      <div class="header">
        <h3 style="text-align:start">Electronic</h3>
      </div>
      <div class="in-card row" style="height: 325;">
        <div
          class="card card-info"
          style="width: 13rem; height: 19.5rem"
          v-for="{name, desc, id} in company"
          :key="id"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
            class="card-img-top"
            alt="Image company"
          >
          <div class="card-body">
            <h5 class="card-title">ABC Home Inc.</h5>
            <p class="card-text">Bangkok</p>
          </div>
        </div>
        <!--  -->
        <router-link to="/all">
          <div class="card card-info final-card" style="width: 13rem; height: 19.5rem;">
            <div
              class="top"
              style="position:absolute; top:0; left:0; width:100%; height:100%; background-color:black; z-index:2; opacity:0.3;"
            ></div>
            <div
              class="inside"
              style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
                class="card-img-top"
                alt="Image company"
              >
              <div class="card-body">
                <h5 class="card-title">ABC Home Inc.</h5>
                <p class="card-text">Location: Bangkok</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      company: [
        {
          companyName: "company1",
          description: "hello i'm company 1"
        },
        {
          companyName: "company2",
          description: "hello i'm company 2"
        },
        {
          companyName: "company3",
          description: "hello i'm company 3"
        },
        {
          companyName: "company4",
          description: "hello i'm company 4"
        }
      ]
    };
  },
  computed: {
    companyCategory: {
      get() {
        return this.$store.getters["getCompanyCategory"];
      }
    }
  },
  methods: {
    setCompanyCategory(value) {
      this.$store.dispatch("commitCompanyCategory", value);
    }
  },
  created() {
    this.$http
      .get("https://request-dot-soa2019.appspot.com/api/request")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
  }
};
</script>

<style>
#home {
  margin-top: 20px;
  font-family: "Playfair Display", serif;
}
.card-info {
  color: black;
  position: relative;
  display: inline-block;
  font-family: "Playfair Display", serif;
  font-size: 16px;
  margin-right: 4px;
  margin-left: 15px;
  margin-bottom: 20px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.card-info::after {
  opacity: 0;
}
.card-info:hover {
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
}
.card-info:hover::after {
  opacity: 1;
}
.final-card {
  color: black;
  -webkit-box-shadow: inset 0px 0px 4px 200px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: inset 0px 0px 4px 200px rgba(0, 0, 0, 0.48);
  box-shadow: inset 0px 0px 4px 200px rgba(0, 0, 0, 0.48);
}
</style>
