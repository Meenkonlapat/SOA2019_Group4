<template>
  <div class="container" id="home">
    <div class="device">
      <div class="header">
        <h3 style="text-align:start">Device</h3>
      </div>
      <div class="in-card row" style="height: 325;">
        <div class="card card-info" style="width: 13rem; height: 19.5rem" v-for="compa in company">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
            class="card-img-top"
            alt="Image company"
          >
          <div class="card-body">
            <h5 class="card-title">{{compa.companyName}}</h5>
            <p class="card-text">{{compa.description}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="electronic">
      <div class="header">
        <h3 style="text-align:start">Electronic</h3>
      </div>
      <div class="in-card row" style="height: 325;">
        <div class="card card-info" style="width: 13rem; height: 19.5rem">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
            class="card-img-top"
            alt="Image company"
          >
          <div class="card-body">
            <h5 class="card-title">ABC Home Inc.</h5>
            <p class="card-text">Bangkok</p>
          </div>
        </div>
        <!--  -->
        <div class="card card-info" style="width: 13rem; height: 19.5rem">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
            class="card-img-top"
            alt="Image company"
          >
          <div class="card-body">
            <h5 class="card-title">ABC Home Inc.</h5>
            <p class="card-text">Location: Bangkok</p>
          </div>
        </div>
        <!--  -->
        <div class="card card-info" style="width: 13rem; height: 19.5rem">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
            class="card-img-top"
            alt="Image company"
          >
          <div class="card-body">
            <h5 class="card-title">ABC Home Inc.</h5>
            <p class="card-text">Location: Bangkok</p>
          </div>
        </div>
        <!--  -->
        <div class="card card-info" style="width: 13rem; height: 19.5rem">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
            class="card-img-top"
            alt="Image company"
          >
          <div class="card-body">
            <h5 class="card-title">ABC Home Inc.</h5>
            <p class="card-text">Location: Bangkok</p>
          </div>
        </div>
        <!--  -->
        <div class="card card-info final-card" style="width: 13rem; height: 19.5rem">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
            class="card-img-top"
            alt="Image company"
          >
          <div class="card-body">
            <h5 class="card-title">ABC Home Inc.</h5>
            <p class="card-text">Location: Bangkok</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            company : [
                {
                    companyName : "company1",
                    description : "hello i'm company 1"
                },
                {
                    companyName : "company2",
                    description : "hello i'm company 2"
                },
                {
                    companyName : "company3",
                    description : "hello i'm company 3"
                },
                {
                    companyName : "company4",
                    description : "hello i'm company 4"
                },
                {
                    companyName : "company5",
                    description : "hello i'm company 5"
                }
            ]
        }
    }
};
</script>

<style>
#home {
  margin-top: 60px;
}
.card-info {
  font-size: 16px;
  margin-right: 4px;
  margin-left: 15px;
  margin-bottom: 20px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
.card-info:hover {
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.021);
}
.final-card {
  -webkit-box-shadow: inset 0px 0px 4px 200px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: inset 0px 0px 4px 200px rgba(0, 0, 0, 0.48);
  box-shadow: inset 0px 0px 4px 200px rgba(0, 0, 0, 0.48);
}
</style>
