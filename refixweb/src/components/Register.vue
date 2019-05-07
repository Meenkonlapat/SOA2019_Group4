<template>
  <div id="register">
    <div class="container col-md-5 bg-white box-form">
      <div class="title text-center pb-4">
        <h1>Refix</h1>
      </div>
      <div class="formControl text-center">
        <input type="email" placeholder="Email" id="email" required>
        <input type="text" placeholder="Username" id="usr" required>
        <input type="password" placeholder="Password" id="pwd" required>
        <input type="password" placeholder="Confirm Password" id="cpwd" required>
      </div>
      <div class="dateOfBirth">
        <div id="label">
          <p id="label-dob">Dath of birth</p>
        </div>
        <div id="form-dob row">
          <div class="control-day col-sm">
            <input
              type="number"
              maxlength="2"
              max="31"
              id="register-dob-day"
              min="1"
              required
              placeholder="Day"
            >
          </div>
          <div class="control-month col-sm">
            <select name="month" id="register-dob-month" required aria-placeholder="Month">
              <option value selected="selected">Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <div class="control-year col-sm">
            <input
              type="number"
              name="year"
              id="register-dob-year"
              maxlength="4"
              max="2006"
              min="1900"
              required
              placeholder="Year"
            >
          </div>
        </div>
      </div>
      <div class="genderSel">
        <form>
          <input type="radio" name="gender" id="selMale" value="male">
          <label for="male">Male</label>
          <br>
          <input type="radio" name="gender" id="selFe" value="female">
          <label for="female">Female</label>
          <br>
        </form>
      </div>
      <button class="btn">sign up</button>
      <p>Already have an account? Login</p>
    </div>
  </div>
</template>

<style>
#register {
  font-family: "Playfair Display", serif;
  background-image: linear-gradient(120deg, #2c92eb 0%, #2857d8 100%);
}
.box-form {
  padding-top: 6em;
  padding-bottom: 3em;
  padding-left: 3em;
  padding-right: 3em;
}
input {
  width: 21em;
  margin-bottom: 1.5em;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  letter-spacing: 0.012px;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  text-indent: 1em;
}
#register-dob-day,
#register-dob-year {
  width: 6em;
}
#register-dob-month {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
}
button {
  text-transform: uppercase;
  letter-spacing: 3px;
  width: 233px;
  color: #ffffff;
  border: 2px solid #48b2ff;
  background-color: #48b2ff;
  text-align: center;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  margin-top: 1em;
  margin-bottom: 3em;
  text-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
button::after {
  opacity: 0;
}
button:hover {
  border: 1px solid rgb(34, 163, 255);
  background-color: rgb(34, 163, 255);
}
button:hover::after {
  opacity: 1;
}
</style>