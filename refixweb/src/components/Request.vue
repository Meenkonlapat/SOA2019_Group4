<template>
  <div id="request">
    <form>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Username:</label>
        <div class="col-sm-10">
          <input type="text" readonly class="form-control" value="email@example.com">
        </div>
      </div>
      <div class="form-group row">
        <label for="text" class="col-sm-2 col-form-label">Repair:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control">
        </div>
      </div>
      <div class="form-group row">
        <label for="text" class="col-sm-2 col-form-label">Detail:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control">
        </div>
      </div>
      <div class="form-group row">
        <label for="text" class="col-sm-2 col-form-label">Location:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control">
        </div>
      </div>
    </form>
    <div class="wrapper">
      <button class="btn confirm-button">Confirm</button>
      <button class="btn cancel-button">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#request{
  font-family: "Playfair Display", serif;
	max-width: 40em;
  margin: 0;
  margin: auto;
  margin-top: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
}
.wrapper{
	text-align: center;
}
label{
  color: #000;
}
.confirm-button{
	position: inherit;
	border: 2px solid #0e79f5;
	background-color: #0e79f5;
	color: #ffffff;
	padding-bottom: 1.8em;
	outline:none;
	height: 35px;
	width: 100px;
	text-align: center;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
	border-radius: 6px;
	letter-spacing: 0.012px;
}
.confirm-button:active{
	color: #333
}
.cancel-button{
	position: inherit;
	color: red;
	border: 2px solid red;
	background-color: #fff;
	padding-bottom: 1.8em;
	outline:none;
	height: 35px;
	width: 100px;
	margin-left: 10px;
	text-align: center;
	border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
	letter-spacing: 0.012px;
}
.cancel-button:active{
	background-color: red;
	border-color: #fff;
	color: #fff;
}
</style>