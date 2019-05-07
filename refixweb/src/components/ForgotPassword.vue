<template>
  <div id="forgotPassword">
    <div class="p-0 bg-white text-center" style="border: 1px solid;">
      <div class="box p-5">
        <div id="title">
          <h1>
            <p class="text-center pb-4">Password Reset</p>
          </h1>
        </div>
        <div class="col-md-6 align-self-center">
          <p class="text-center pb-4">
            Enter your
            <b>email address</b> that your used to register. We’ll send an email
            with your username and a link to reset password.
          </p>
        </div>
        <div class="inputMail">
          <div class="label">
            <b id="label">Enter your email address</b>
          </div>
          <div class="form pb-5">
            <input type="email" placeholder="eg. somsak@refix.com">
          </div>
          <div class="button pt-2">
            <router-link to="/login">
              <button type="button" class="btn sendBtn">SEND</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#forgotPassword {
  font-family: "Playfair Display", serif;
  background-image: linear-gradient(120deg, #2c92eb 0%, #2857d8 100%);
}
.sendBtn {
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
.sendBtn::after {
  opacity: 0;
}
.sendBtn:hover {
  border: 2px solid rgb(34, 163, 255);
  background-color: rgb(34, 163, 255);
}
.sendBtn:hover::after {
  opacity: 1;
}
#label {
  margin-right: 22em;
  font-size: 15px;
}
input {
  width: 33em;
  text-indent: 10px;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.068);
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
}
</style>

