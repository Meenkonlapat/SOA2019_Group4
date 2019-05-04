<template>
  <div class="container" id="home">
  hello world
    <div class="device">
      <div class="header">
        <h3 style="text-align:start">Appliance</h3>
      </div>
      <div class="in-card row" style="height: 325;">
        <template v-for="(compa, index) in applianceCompany">
          <router-link to="/company" :key="index" v-if="index < 4">
            <div
              class="card card-info"
              style="width: 13rem; height: 19.5rem"
              @click="setCompany(compa)"
            >
              <img
                :src="compa.companyLogo"
                class="card-img-top"
                alt="Image company"
              >
              <div class="card-body">
                <h5 class="card-title">{{compa.companyName}}</h5>
                <p class="card-text">{{compa.description}}</p>
              </div>
            </div>
          </router-link>

          <router-link to="/all" :key="index" v-if="index == 4">
            <div
              class="card card-info final-card"
              style="width: 13rem; height: 19.5rem;"
              @click="setCompanyCategory('appliance')"
            >
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
                  :src="compa.companyLogo"
                  class="card-img-top"
                  alt="Image company"
                >
                <div class="card-body">
                  <h5 class="card-title">{{ compa.companyName }}</h5>
                  <p class="card-text">{{ compa.description }}</p>
                </div>
              </div>
            </div>
          </router-link>
        </template>
      </div>
    </div>

    <div class="electric">
      <div class="header">
        <h3 style="text-align:start">Electric</h3>
      </div>
      <div class="in-card row" style="height: 325;">
        <template v-for="(compa, index) in electricCompany">
          <router-link to="/company" :key="index" v-if="index < 4">
            <div
              class="card card-info"
              style="width: 13rem; height: 19.5rem"
              @click="setCompany(compa)"
            >
              <img
                :src="compa.companyLogo"
                class="card-img-top"
                alt="Image company"
              >
              <div class="card-body">
                <h5 class="card-title">{{compa.companyName}}</h5>
                <p class="card-text">{{compa.description}}</p>
              </div>
            </div>
          </router-link>

          <router-link to="/all" :key="index" v-if="index == 4">
            <div
              class="card card-info final-card"
              style="width: 13rem; height: 19.5rem;"
              @click="setCompanyCategory('electric')"
            >
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
                  :src="compa.companyLogo"
                  class="card-img-top"
                  alt="Image company"
                >
                <div class="card-body">
                  <h5 class="card-title">{{ compa.companyName }}</h5>
                  <p class="card-text">{{ compa.description }}</p>
                </div>
              </div>
            </div>
          </router-link>
        </template>
      </div>
    </div>

    <div class="plumbling">
      <div class="header">
        <h3 style="text-align:start">Plumbling</h3>
      </div>
      <div class="in-card row" style="height: 325;">
        <template v-for="(compa, index) in plumblingCompany">
          <router-link to="/company" :key="index" v-if="index < 4">
            <div
              class="card card-info"
              style="width: 13rem; height: 19.5rem"
              @click="setCompany(compa)"
            >
              <img
                :src="compa.companyLogo"
                class="card-img-top"
                alt="Image company"
              >
              <div class="card-body">
                <h5 class="card-title">{{compa.companyName}}</h5>
                <p class="card-text">{{compa.description}}</p>
              </div>
            </div>
          </router-link>

          <router-link to="/all" :key="index" v-if="index == 4">
            <div
              class="card card-info final-card"
              style="width: 13rem; height: 19.5rem;"
              @click="setCompanyCategory('plumbling')"
            >
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
                  :src="compa.companyLogo"
                  class="card-img-top"
                  alt="Image company"
                >
                <div class="card-body">
                  <h5 class="card-title">{{ compa.companyName }}</h5>
                  <p class="card-text">{{ compa.description }}</p>
                </div>
              </div>
            </div>
          </router-link>
        </template>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      applianceCompany: [
        {
          companyName: "service unavailable",
          description: "please try again later"
        },
        {
          _id: "5cbd4b6370af6f07f4c753f8",
          companyId: "010001",
          companyName: "Appliance A Company",
          companyDescription: "hello world",
          companyCategory: "appliance",
          __v: 0,
          companyAddress: "44/444 Bangkok"
        }
      ],
      electricCompany: [],
      plumblingCompany: []
    };
  },
  computed: {
    companyCategory: {
      get() {
        return this.$store.getters["getCompanyCategory"];
      }
    },
    company: {
      get() {
        return this.$store.getters["getCompany"];
      }
    }
  },
  methods: {
    setCompanyCategory(value) {
      this.$store.dispatch("commitCompanyCategory", value);
    },
    setCompany(obj) {
      this.$store.dispatch("commitCompany", obj);
    }
  },
  created() {
    this.$http
      .get("https://refixsoa2019.appspot.com/api/company", {
        // params: {limit: 5, category: this.$store.getters["getCompanyCategory"]}
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        const applianceArray = [];
        const electricArray = [];
        const plumblingArray = [];
        for (let key in data) {
          if (
            data[key].companyCategory == "appliance" &&
            applianceArray.length < 5
          ) {
            applianceArray.push(data[key]);
          } else if (
            data[key].companyCategory == "electric" &&
            electricArray.length < 5
          ) {
            electricArray.push(data[key]);
          }
          else if (
            data[key].companyCategory == "plumbling" &&
            plumblingArray.length < 5
          ) {
            plumblingArray.push(data[key]);
          }
          this.applianceCompany = applianceArray;
          this.electricCompany = electricArray;
          this.plumblingCompany = plumblingArray;
        }
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
