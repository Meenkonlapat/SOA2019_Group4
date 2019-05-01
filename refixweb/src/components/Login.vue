<template>
  <div id="login">
    <div class="container p-5 loginBox">
      <p class="text-center h2" style="letter-spacing: 0.012px;">Welcome to Refix</p>
      <div class="form-group mt-4" style="margin-bottom: 1.5em;">
        <input
          type="text"
          class="form-control"
          id="usr"
          placeholder="Email address or username"
          v-model="username"
        >
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password">
      </div>
      <div class="bottom-from row">
        <div class="col">
          <input type="checkbox" name="remember" id="rememberme">Remember me
        </div>
        <div class="col">
          <router-link to="/forgotpassword">
            <p class="text-right">
              <a class="forgotPassword">Forget your password?</a>
            </p>
          </router-link>
        </div>
      </div>
      <div class="text-center">
        <!-- <router-link to="/"> -->
          <button type="button" class="btn login" @click="setCurrentUser()">Login</button>
        <!-- </router-link> -->

        <hr style="background-color: #d9dadc;">
        <p class="textAcc">
          <b>Don't have an account?</b>
        </p>
        <router-link to="/register">
          <button type="button" class="btn sign-upBtn btn-block">
            <b>SIGN UP FOR REFIX</b>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  methods: {
    setCurrentUser() {
      let user = {
          name: "",
          ID:""
      };
      if (!this.username) {
        alert("username is empty!");
        return;
      }
      else if (this.username == "asd")
      {
          user = {
              name: "asd",
              ID: "000001"
          }
      }
      else if (this.username == "companya")
      {
        user = {
          name : "companya",
          ID: "000001"
        }
        this.$store.dispatch("commitIsCompany", true);
      }
      this.$store.dispatch("commitCurrentUser", user);
      this.$router.push("/");
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("commitInLoginPage", false);
    next();
  }
};
</script>


<style>
#login {
  height: 100vh;
  padding-top: 11%;
  font-family: "Playfair Display", serif;
  background-image: linear-gradient(120deg, #2c92eb 0%, #2857d8 100%);
}
.loginBox {
  border-radius: 6px;
  -webkit-border-radius: 6px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  -moz-border-radius: 6px;
  width: 45%;
  background-color: #ffffff;
}
.from-control {
  width: 466px;
}
b {
  font-size: 18px;
}
.textAcc {
  margin-top: 2em;
}
.login {
  width: 233px;
  color: #ffffff;
  border: 2px solid #48b2ff;
  background-color: #48b2ff;
  text-align: center;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  letter-spacing: 0.012px;
  margin-top: 1em;
  margin-bottom: 3em;
  text-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.login::after {
  opacity: 0;
}
.login:hover {
  color: #fff;
  border: 2px solid rgb(34, 163, 255);
  background-color: rgb(34, 163, 255);
}
.login:hover::after {
  opacity: 1;
}
#rememberme {
  margin-right: 11px;
}
.sign-upBtn {
  color: #48b2ff;
  border: 2px solid #48b2ff;
  background-color: #fff;
  text-align: center;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  letter-spacing: 0.012px;
  margin-top: 1em;
  text-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.sign-upBtn::after {
  opacity: 0;
}
.sign-upBtn:hover {
  background-color: #48b2ff;
  border: 2px solid #48b2ff;
  color: #fff;
}
.sign-upBtn:hover::after {
  opacity: 1;
}
a {
  color: #0e79f5;
  text-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
}
a:hover {
  color: #0e79f5;
  text-decoration: none;
}
</style>