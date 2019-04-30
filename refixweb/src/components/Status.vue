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
              <a class="btn btn-outline-success btn-sm"
              href="#popup1"
              @click="openBill(req.bill)"
              >download</a>
              </template>
              <template v-else>
                -
                </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--  -->
    <div>
      <b-button id="show-btn" @click="showModal">Open Modal</b-button>
      <b-modal ref="my-modal" hide-footer title="your bill">
        <div class="d-block text-center">
          <h3>Hello From My Modal!</h3>
        </div>
      </b-modal>
    </div>
    <!--  -->   
  </div>
</template>

<script>
import jsPDF from 'jspdf';

export default {
  data(){
    return{
      requests:[]
    }
  },
  computed:{
    currentUser : {
      get(){
        return this.$store.getters["getCurrentUser"];
      }
    }
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    openBill(bill){
      var pdf = new jsPDF('p', 'mm', 'a4');
      pdf.text(10, 20, "hello world!");
      pdf.save("eiei.pdf");
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
        for(let key in data){
          if (data[key].customer.id == this.currentUser.ID)
          {
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
</style>
