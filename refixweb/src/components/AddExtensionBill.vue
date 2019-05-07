<template>
  <div id="addExtension">
    <div class="container mt-5">
      <div class="d-flex justify-content-center mb-3 h3">Add repair detail</div>
      <form class="mb-3">
        <div class="form-row">
          <div class="col-10">
            <input
              name="detailbill"
              type="text"
              class="form-control"
              placeholder="Detail"
              v-model="detail"
            >
          </div>
          <div class="col">
            <input
              name="price"
              type="text"
              class="form-control"
              placeholder="Price"
              v-model="price"
            >
          </div>
          <button
            name="addBill"
            type="button"
            class="btn btn-success btn-sm"
            @click="addBill()"
          >Confirm</button>
        </div>
      </form>
      <div class="d-flex justify-content-center mb-3 h3">List bill</div>
      <table class="table table-borderless border table-light text-center">
        <thead>
          <tr class="table-bordered">
            <th scope="col">Detail</th>
            <th scope="col">Price</th>
            <th scope="col" class="float-right pr-5">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bill, index) in request.bill" :key="index">
            <th scope="row">{{ bill.detail }}</th>
            <td scope="row">{{ bill.price }}</td>
            <td scope="row" class="float-right">
              <button type="button" class="btn btn-danger btn-sm" @click="deleteBill(index)">Delete</button>
            </td>
          </tr>
          <tr class="border-top">
            <th scope="row">Total</th>
            <td scope="row">{{ sum }}</td>
            <td scope="row" class="float-right"></td>
          </tr>
        </tbody>
      </table>
      <router-link to="/admin/request">
        <button class="btn" id="backPage">confirm</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sum: 0,
      detail: "",
      price: 0
    };
  },
  methods: {
    calculateSum() {
      this.sum = 0;
      for (let index in this.request.bill) {
        this.sum += this.request.bill[index].price;
      }
    },
    addBill() {
      let newBill = {
        detail: this.detail,
        price: parseInt(this.price, 10)
      };
      this.request.bill.push(newBill);
      this.calculateSum();
      this.$http
        .put(
          "https://request-dot-refixsoa2019.appspot.com/api/request/" +
            this.request._id +
            "/bill",
          { bill: this.request.bill }
        )
        .then(response => {
          console.log("add bill complete");
          this.setRequestStatus();
        });
    },
    deleteBill(index) {
      this.request.bill.splice(index, 1);
      this.calculateSum();
      this.$http
        .put(
          "https://request-dot-refixsoa2019.appspot.com/api/request/" +
            this.request._id +
            "/bill",
          { bill: this.request.bill }
        )
        .then(response => {
          console.log("remove bill complete");
          this.setRequestStatus();
        });
    },
    setRequestStatus() {
      if (this.request.bill.length > 0) {
        this.request.status = "offered";
      } else if (this.request.bill.length == 0) {
        this.request.status = "waiting";
      }
      this.$http
        .put(
          "https://request-dot-refixsoa2019.appspot.com/api/request/" +
            this.request._id +
            "/status",
          { status: this.request.status }
        )
        .then(response => {
          console.log("remove update status complete");
        });
    }
  },
  computed: {
    currentUser: {
      get() {
        return this.$store.getters["getCurrentUser"];
      }
    },
    request: {
      get() {
        return this.$store.getters["getRequest"];
      }
    }
  },
  mounted() {
    this.calculateSum();
  }
};
</script>

<style>
#backPage {
  margin-top: 0.5em;
  color: #ffffff;
  display: inline-block;
  font-size: 18px;
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
#backPage::after {
  opacity: 0;
}
#backPage:hover {
  color: #fff;
  border: 2px solid rgb(34, 163, 255);
  background-color: rgb(34, 163, 255);
}
#backPage:hover::after {
  opacity: 1;
}
</style>