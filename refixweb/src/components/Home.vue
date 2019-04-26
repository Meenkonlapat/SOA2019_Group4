<template>
  <div class="container" id="home">
    <button @click="testpdf()">testpdf</button>
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
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
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
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
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
import jsPDF from "jspdf";
import refixLogo from "./refixLogo.js";

export default {
  data() {
    return {
      applianceCompany: [
        {
          companyName: "service unavailable",
          description: "please try again later"
        }
      ],
      electricCompany: []
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
      console.log("set company called");
      this.$store.dispatch("commitCompanyCategory", value);
    },
    setCompany(obj) {
      this.$store.dispatch("commitCompany", obj);
    },
    testpdf() {
      var img = refixLogo;
      var pdf = new jsPDF("p", "mm", "a4");
      pdf.setFont("helvetica", "normal");
      // background box
      pdf.setFillColor(248, 249, 250);
      pdf.setDrawColor(0, 0, 0);
      pdf.rect(20, 20, 170, 260, "FD");
      // logo
      pdf.setFillColor(0, 0, 0);
      pdf.setDrawColor(0, 0, 0);
      pdf.rect(130, 25, 50, 20, "FD");
      pdf.addImage(img, "png", 130, 25, 50, 20);
      // company name
      pdf.setFontStyle("bold");
      pdf.setFontSize(20);
      pdf.text(30, 35, "Appliance A Company");
      pdf.setFontStyle("normal");
      pdf.setFontSize(14);
      pdf.text(30, 45, "Invoice Number : 000001");
      pdf.line(20, 50, 190, 50);
      // second row
      pdf.setFontStyle("bold");
      pdf.text(25, 60, "Company Info");
      pdf.setFontStyle("normal");
      pdf.setFontSize(12);
      pdf.text(25, 70, "123/456, Ladkrabang, Bangkok");

      pdf.line(105, 50, 105, 85);

      pdf.setFontStyle("bold");
      pdf.setFontSize(14);
      pdf.text(110, 60, "Bill to");
      pdf.setFontStyle("normal");
      pdf.setFontSize(12);
      pdf.text(110, 70, "Mr asd fgh");
      pdf.text(110, 80, "789/012, Ladkrabang, Bangkok");
      pdf.line(20, 85, 190, 85);
      //start detail table
      pdf.setDrawColor(100, 100, 100);
      pdf.line(25, 90, 185, 90);
      pdf.setFontStyle("bold");
      pdf.text(30, 96, "Detail");
      pdf.text(170, 96, "Price");
      pdf.line(25, 100, 185, 100);

      pdf.setFontStyle("normal");
      const example = [
        { detail: "mechanic cost", price: 100 },
        { detail: "new motor price", price: 500 }
      ];
      let y_pos = 106;
      let total = 0;
      for (let index in example) {
        pdf.text(30, y_pos, example[index].detail);
        pdf.text(170, y_pos, example[index].price.toString());
        y_pos += 4;
        pdf.line(25, y_pos, 185, y_pos);
        y_pos += 6;
        total += example[index].price;
      }
      y_pos -= 5;
      pdf.setDrawColor(0, 0, 0);
      pdf.line(25, y_pos, 185, y_pos);
      y_pos += 7;
      pdf.setFontStyle("bold");
      pdf.text(150, y_pos, "Total");
      pdf.text(170, y_pos, total.toString());

      pdf.save("ztest.pdf");
    }
  },
  created() {
    this.$http
      .get("https://refixsoa.appspot.com/api/company", {
        // params: {limit: 5, category: this.$store.getters["getCompanyCategory"]}
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        const applianceArray = [];
        const electricArray = [];
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
          this.applianceCompany = applianceArray;
          this.electricCompany = electricArray;
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
