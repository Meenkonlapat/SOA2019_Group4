<template>
  <div>
    <div class="container">
      <table class="table table-borderless mt-5 border table-light text-center">
        <thead>
          <tr class="table-bordered">
            <th scope="col">ID</th>
            <th scope="col">Company</th>
            <th scope="col">Repair</th>
            <th scope="col">Status</th>
            <th scope="col">Bill</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td class="p-2">
              <a class="btn btn-outline-success btn-sm" href="#popup1">Click</a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td class="p-2">
              <a class="btn btn-outline-success btn-sm">Click</a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td class="p-2">
              <a class="btn btn-outline-success btn-sm">Click</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--  -->
    <div>
    <b-button id="show-btn" @click="showModal">Open Modal</b-button>
    <b-modal ref="my-modal" hide-footer title="your bill">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
    </b-modal>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
   methods:{
     showModal(){
       this.$refs['my-modal'].show();
     }
   }
};
</script>

<style>
  
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
</style>