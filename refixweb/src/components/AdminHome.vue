<template>
    <div id="adminHome">
        <div class="container text-center mt-5">
        <h1 class="mb-4">Admin menu</h1>
        <div class="row justify-content-around">
            <div class="col-4">
                <router-link to="/admin/request">
                    <div class="card bg-white card-admin">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
                            class="card-img image-admin" alt="request all">
                        <div class="card-img-overlay">
                            <h1 class="card-title">Repair request</h1>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-4">
                <router-link to="/message">
                    <div class="card bg-white card-admin i-am-centerd center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
                            class="card-img image-admin" alt="messenger">
                        <div class="card-img-overlay center align-items-center">
                            <h1>Messager</h1>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    </div>
</template>
<style>
#adminHome{
    font-family: "Playfair Display", serif;
    margin-top: 20px;
}
.image-admin{
    opacity: .7;
}
.card-admin {
  color: #fff;
  position: relative;
  display: inline-block;
  font-family: "Playfair Display", serif;
  font-size: 16px;
  margin-right: 4px;
  margin-left: 15px;
  margin-bottom: 20px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.card-admin::after {
  opacity: 0;
}
.card-admin:hover {
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
}
.card-admin:hover::after {
  opacity: 1;
}
</style>