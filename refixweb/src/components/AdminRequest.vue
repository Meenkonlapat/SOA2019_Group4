<template>
  <div id="lookAllRequrst">
    <div class="container">
      <table class="table table-borderless mt-5 border table-light text-center">
        <thead>
          <tr class="table-bordered">
            <th scope="col">ID</th>
            <th scope="col">Repair</th>
            <th scope="col">Status</th>
            <th scope="col">Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(req, index) in requests" :key="index">
            <th scope="row">{{index+1}}</th>
            <td>{{req.title}}</td>
            <td>{{req.status}}</td>
            <td class="p-2">
              <button type="button" class="btn" id="btnView" @click="confirmBill(req)">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>

#btnView {
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
</style>
