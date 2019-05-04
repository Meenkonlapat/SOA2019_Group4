<template>
  <div id="status">
    <div class="container">
      <table class="table table-borderless mt-5 border table-light text-center">
        <thead>
          <tr class="table-bordered">
            <th scope="col">ID</th>
            <th scope="col">Company</th>
            <th scope="col">Repair</th>
            <th scope="col">Status</th>
            <th scope="col">Bill</th>
            <th scope="col">Acception</th>
          </tr>
        </thead>
        <tbody>
          <tr class="p-1" v-for="(req, index) in requests" :key="index">
            <th scope="row">{{req.requestId}}</th>
            <td>{{req.company.name}}</td>
            <td>{{req.title}}</td>
            <td>
              <template v-if="req.status == 'completed'">
                <a href="#" class="badge badge-success p-1">Done</a>
              </template>
              <template v-else-if="req.status == 'offered'">
                <a href="#" class="badge badge-primary p-1">Offered</a>
              </template>
              <template v-else-if="req.status == 'waiting'">
                <a href="#" class="badge badge-dark p-1">Waiting</a>
              </template>
            </td>
            <td class="p-2">
              <template
                v-if="req.bill.length > 0 && (req.status == 'completed' || req.status == 'offered')"
              >
                <button class="btn btn-outline-success btn-sm" @click="openBill(req, req.status)">Download</button>
              </template>
              <template v-else>
                <button type="button" class="btn btn-dark btn-sm" disabled>In progress</button>
              </template>
            </td>
            <td class="p-2">
              <template v-if="req.status == 'offered'">
                <button type="button" name="confirm" class="btn btn-outline-primary btn-sm" @click="confirmBill(req)">
                Confirm</button>
              </template>
              <template v-if="req.status == 'waiting'">
                <button type="button" class="btn btn-dark btn-sm" disabled>Waiting</button>
              </template>
              <template v-if="req.status == 'completed'">
                <button type="button" class="btn btn-success btn-sm border border-success">Completed</button>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import refixLogo from "./refixLogo.js";
import waterMark from "./exampleWaterMark.js";

export default {
  data() {
    return {
      requests: [
        {
          customer: {
            id: "000001",
            name: "asd",
            address: "999/999 Bangkok"
          },
          company: {
            id: "000001",
            name: "Appliance A Company",
            address: "12/345 Bangkok"
          },
          _id: "5cc063b6bf003c20506ef5db",
          requestId: "000001",
          category: "appliance",
          status: "completed",
          title: "fix electric fan",
          description: "fix hatari fan",
          bill: [
            {
              _id: "5cc9aa2efe561d2ffcc2bd28",
              detail: "change fan motor",
              price: 10
            },
            {
              detail: "mechanic cost",
              price: 20
            }
          ],
          __v: 0
        },
        {
          customer: {
            id: "000001",
            name: "asd"
          },
          company: {
            id: "000001",
            name: "Appliance A Company",
            address: "12/345 Bangkok"
          },
          _id: "5cc06471bf003c20506ef5de",
          requestId: "000002",
          category: "appliance",
          status: "waiting",
          title: "fix TV",
          description: "fix left speaker",
          bill: [],
          __v: 0
        }
      ]
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
    openBill(req, status) {
      var img = refixLogo;
      var waterMarkImg = waterMark;
      var pdf = new jsPDF("p", "mm", "a4");
      pdf.setFont("helvetica", "normal");
      // background box
      pdf.setFillColor(248, 249, 250);
      pdf.setDrawColor(0, 0, 0);
      pdf.rect(20, 20, 170, 260, "FD");
      // logo
      pdf.setFillColor(0, 0, 0);
      pdf.setDrawColor(0, 0, 0);
      pdf.addImage(img, "png", 130, 25, 50, 20);
      // company name
      pdf.setFontStyle("bold");
      pdf.setFontSize(20);
      pdf.text(30, 35, req.company.name);
      pdf.setFontStyle("normal");
      pdf.setFontSize(14);
      pdf.text(30, 45, "Invoice Number : " + req.requestId);
      pdf.line(20, 50, 190, 50);
      // second row
      pdf.setFontStyle("bold");
      pdf.text(25, 60, "Company Info");
      pdf.setFontStyle("normal");
      pdf.setFontSize(12);
      pdf.text(25, 70, req.company.address);

      pdf.line(105, 50, 105, 85);

      pdf.setFontStyle("bold");
      pdf.setFontSize(14);
      pdf.text(110, 60, "Bill to");
      pdf.setFontStyle("normal");
      pdf.setFontSize(12);
      pdf.text(110, 70, req.customer.name);
      pdf.text(110, 80, req.customer.address);
      pdf.line(20, 85, 190, 85);
      //start detail table
      pdf.setDrawColor(100, 100, 100);
      pdf.line(25, 90, 185, 90);
      pdf.setFontStyle("bold");
      pdf.text(30, 96, "Detail");
      pdf.text(170, 96, "Price");
      pdf.line(25, 100, 185, 100);

      pdf.setFontStyle("normal");
      let y_pos = 106;
      let total = 0;
      for (let index in req.bill) {
        pdf.text(30, y_pos, req.bill[index].detail);
        pdf.text(170, y_pos, req.bill[index].price.toString());
        y_pos += 4;
        pdf.line(25, y_pos, 185, y_pos);
        y_pos += 6;
        total += req.bill[index].price;
      }
      y_pos -= 5;
      pdf.setDrawColor(0, 0, 0);
      pdf.line(25, y_pos, 185, y_pos);
      y_pos += 7;
      pdf.setFontStyle("bold");
      pdf.text(150, y_pos, "Total");
      pdf.text(170, y_pos, total.toString());

      if (status != "completed") {
        pdf.addImage(waterMarkImg, "png", 0, 0, 210, 300);
      }

      pdf.save("Bill Id " + req.requestId + ".pdf");
    },
    confirmBill(req) {
      if (confirm("Do you want to accept this bill")) {
        this.$http
          .put(
            "https://request-dot-refixsoa2019.appspot.com/api/request/" +
              req._id +
              "/status",
            { status: "completed" }
          )
          .then(() => {
            alert("update complete !!");
            req.status = "completed";
          });
      }
    }
  },
  created() {
    this.$http
      .get("https://request-dot-refixsoa2019.appspot.com/api/request")
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
#status {
  font-family: "Playfair Display", serif;
  margin-top: 20px;
}
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

#btnCompleted{
  color: #ffffff;
  border: 2px solid #48b2ff;
  background-color: #48b2ff;
  text-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
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
