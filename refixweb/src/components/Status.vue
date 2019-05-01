<template>
  <div>
    <div class="container">
      <table class="table table-borderless mt-5 border table-light text-center">
        <thead>
          <tr class="table-bordered">
            <th scope="col">ID</th>
            <th scope="col">Company</th>
            <th scope="col">Repair</th>
            <th scope="col">Status</th>
            <th scope="col">Bill</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(req, index) in requests" :key="index">
            <th scope="row">{{req.requestId}}</th>
            <td>{{req.company.name}}</td>
            <td>{{req.title}}</td>
            <td>{{req.status}}</td>
            <td class="p-2">
              <template v-if="req.bill.length > 0">
                <a
                  class="btn btn-outline-success btn-sm"
                  href="#popup1"
                  @click="openBill(req.bill)"
                >download</a>
              </template>
              <template v-else>-</template>
            </td>
            <td id="confirmBill">
              <button type="button" class="btn" id="btnBill" @click="confirmBill">Confirm bill</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";

export default {
  data() {
    return {
      requests: []
    };
  },
  computed: {
    currentUser: {
      get() {
        return this.$store.getters["getCurrentUser"];
      }
    }
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    openBill(bill) {
      var pdf = new jsPDF("p", "mm", "a4");
      pdf.text(10, 20, "hello world!");
      pdf.save("eiei.pdf");
    },
    confirmBill: () =>{
      return confirm('You want to accept this bill?');
    }
  },
  created() {
    this.$http
      .get("https://request-dot-refixsoa.appspot.com/api/request")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const result = [];
        for (let key in data) {
          if (data[key].customer.id == this.currentUser.ID) {
            result.push(data[key]);
          }
        }
        this.requests = result;
      });
  }
};
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup {
  font-size: 1.25em;
  margin: 100px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 40%;
  position: relative;
}
#btnBill {
  margin-top: -0.5em;
  color: #ffffff;
  display: inline-block;
  font-size: 14px;
  padding: -5px;
  border: 2px solid #48b2ff;
  background-color: #48b2ff;
  text-align: center;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  letter-spacing: 0.012px;
  text-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
#btnBill::after {
  opacity: 0;
}
#btnBill:hover {
  color: #fff;
  border: 2px solid rgb(34, 163, 255);
  background-color: rgb(34, 163, 255);
}
#btnBill:hover::after {
  opacity: 1;
}
</style>
