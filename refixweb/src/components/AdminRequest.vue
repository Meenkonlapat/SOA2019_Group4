<template>
  <div id="lookAllRequrst">
    <div class="container">
      <router-link to="/admin">
        <button class="btn" id="backPage">Previous</button>
      </router-link>
      <table class="table table-borderless mt-5 border table-light text-center">
        <thead>
          <tr class="table-bordered">
            <th scope="col">ID</th>
            <th scope="col">Repair</th>
            <th scope="col">Status</th>
            <th scope="col">Bill</th>
            <th scope="col">Chat</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(req, index) in requests" :key="index">
            <th scope="row">{{req.requestId}}</th>
            <td>{{req.title}}</td>
            <td>{{req.status}}</td>
            <td class="p-2">
              <!-- link this to edit bill page later -->
              <template v-if="req.status != 'completed'">
                <router-link to="/admin/addDetail">
                  <button type="button" class="btn" id="btnView" @click="setRequest(req)">Edit</button>
                </router-link>
              </template>
              <template v-else>-</template>
            </td>
            <td>
              <button @click="chatClicked(req)" id="btnChat" class="btn">Chat</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
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
    setRequest(req) {
      this.$store.dispatch("commitRequest", req);
    },
    chatClicked(req) {
      this.$http
        .get("https://contact-dot-refixsoa2019.appspot.com/api/contact")
        .then(response => {
          return response.json();
        })
        .then(data => {
          let isRoomExisted = false;
          for (let key in data) {
            if (
              data[key].companyId == this.currentUser.ID &&
              data[key].customerId == req.customer.id
            ) {
              isRoomExisted = true;
            }
          }
          if (!isRoomExisted) {
            let contactObject = {
              companyId: this.currentUser.ID,
              companyName: this.currentUser.name,
              customerId: req.customer.id,
              customerName: req.customer.name,
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
                this.$router.push("/messenger");
              });
          } else {
            this.$router.push("/messenger");
          }
        });
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
          if (data[key].company.id == this.currentUser.ID) {
            result.push(data[key]);
          }
        }
        this.requests = result;
      });
  }
};
</script>

<style>
#backPage {
  margin-top: 0.5em;
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

#btnView {
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
#btnView::after {
  opacity: 0;
}
#btnView:hover {
  color: #fff;
  border: 2px solid rgb(34, 163, 255);
  background-color: rgb(34, 163, 255);
}
#btnView:hover::after {
  opacity: 1;
}
#btnChat {
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
#btnChat::after {
  opacity: 0;
}
#btnChat:hover {
  color: #fff;
  border: 2px solid rgb(34, 163, 255);
  background-color: rgb(34, 163, 255);
}
#btnChat:hover::after {
  opacity: 1;
}
</style>
