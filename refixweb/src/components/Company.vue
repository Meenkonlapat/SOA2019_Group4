<template>
  <div class="container" id="company">
    <div class="header">
      <h3 style="text-align:start; margin-bottom: 1em;">Air Conditioner Legendary</h3>
    </div>
    <div class="row">
      <div class="col-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
          alt="Image Company"
          id="imgCompany"
        >
      </div>
      <div class="col-8">
        <div id="address">Address: 999/111 SomSak Road London England</div>
        <div id="button-group">
<<<<<<< HEAD
          <a href="#popup1" class="btn btn-outline-primary">Request</a>
          <a href="#popup1" class="btn btn-outline-info">Contact</a>
=======
          <a href="#popup1" class="button">Request</a>
          <a href="#popup1" class="contact">Contact</a>
>>>>>>> e90caad2b85aa70530ed69f6016d3176c92d21da
          <div id="popup1" class="overlay">
            <div class="popup">
              <h3>Detail Request</h3>
			  		<a class="close" href="#">&times;</a>
              <form>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">Username:</label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      readonly
                      class="form-control"
                      value="email@example.com"
                    >
                  </div>
                </div>
                <div class="form-group row">
                  <label for="text" class="col-sm-2 col-form-label">Repair: </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>
                <div class="form-group row">
                  <label for="text" class="col-sm-2 col-form-label">Detail: </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>
                <div class="form-group row">
                  <label for="text" class="col-sm-2 col-form-label">Location: </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>
              </form>
			  <div class="wrapper">
					<button class="btn confirm-button">Confirm</button>
					<button class="btn cancel-button">Cancel</button>
			  </div>
            </div>
          </div>
        </div>
      </div>
	  <div class="portfolio">
		  
	  <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg" alt="img port" class="port">
	  <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg" alt="img port" class="port">
	  <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg" alt="img port" class="port">
	  <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg" alt="img port" class="port">
	  <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg" alt="img port" class="port">
	  </div>
    </div>
  </div>
</template>

<style>
#company {
  	font-family: "Playfair Display", serif;
  	margin-top: 20px;
}
#imgCompany {
  	max-width: 300px;
  	max-height: 300px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
	border-radius: 3px;
}
.port{
	margin-left: 15px;
	margin-top: 2em;
  	max-width: 130px;
  	max-height: 130px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
	border-radius: 2px;
}
#button-group{
	margin-top: 3em;
}
.button {
	color: #0e79f5;
	border: 2px solid #0e79f5;
	background-color: #fff;
	padding-top: 7px;
	padding-bottom: 7px;
	padding-left: 15px;
	padding-right: 15px;
	text-align: center;
	border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
	letter-spacing: 0.012px;
}
.button:hover{
	color: #0e79f5;
	text-decoration: none;
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
.popup h3 {
  margin-top: 0;
  color: #333;
}
.form-control {
	max-width: 20em;
	margin-top: 2px;
	margin-left: 1em;
}
.wrapper{
	text-align: center;
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
.contact{
    margin-left: 2em;
	color: #ffffff;
	border: 2px solid #0e79f5;
	background-color: #0e79f5;
	padding-top: 7px;
	padding-bottom: 7px;
	padding-left: 15px;
	padding-right: 15px;
	text-align: center;
	border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
	letter-spacing: 0.012px;
}
.contact:hover{
	color: #fff;
    text-decoration: none;
}
</style>