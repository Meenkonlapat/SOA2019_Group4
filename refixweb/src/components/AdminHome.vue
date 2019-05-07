<template>
  <div id="adminHome">
    <div class="container text-center mt-3">
      <h1 class="display-4 mb-4">Admin menu</h1>
      <div class="row justify-content-around mt-5">
        <div name="repair_request" class="col-4">
          <router-link to="/admin/request">
            <div class="bg-white card-admin">
              <img src="../assets/request.png" class="card-img image-admin" alt="request all">
              <div class="card-img-overlay">
                <h1 class="card-title">Repair request</h1>
              </div>
            </div>
          </router-link>
        </div>
        <div name="message_mechanic" class="col-4">
          <router-link to="/messenger">
            <div class="bg-white card-admin">
              <img src="../assets/messenger.png" class="card-img image-admin" alt="messenger">
              <div class="card-img-overlay">
                <h2 class="card-title">Messenger</h2>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <router-link to="/">
        <button
          name="logout2"
          type="button"
          class="btn btn-outline-dark btn-sm mt-3"
          style="font-size:18px; padding-right:1.5rem;padding-left:1.5rem;"
          @click="logOut()"
        >Logout</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      if (confirm("Do you want to logout?")) {
        this.$store.dispatch("commitCurrentUser", { name: "", ID: "" });
        this.$store.dispatch("commitIsCompany", false);
      }
    }
  }
};
</script>


<style>
#adminHome {
  font-family: "Playfair Display", serif;
  margin-top: 20px;
}
.card-title {
  top: 50%;
  left: 50%;
  position: ABSOLUTE;
  margin: 0;
  transform: translate(-50%, -50%);
}
.image-admin {
  opacity: 0.3;
}
.card-admin {
  color: #333;
  position: relative;
  display: inline-block;
  font-family: "Playfair Display", serif;
  font-size: 16px;
  margin-right: 4px;
  margin-left: 15px;
  padding: 0.5rem;
  margin-bottom: 20px;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.card-admin::after {
  opacity: 0;
}
.card-admin:hover {
  box-shadow: 0 0px 6px 0 hsla(0, 0%, 0%, 0.2);
}
.card-admin:hover::after {
  opacity: 1;
}
</style>