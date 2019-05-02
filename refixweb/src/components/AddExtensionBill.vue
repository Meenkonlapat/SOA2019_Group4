<template>
  <div id="addExtension">
    <div class="container mt-5">
      <div class="d-flex justify-content-center mb-3 h3">Add repair detail</div>
      <form class="mb-3">
        <div class="form-row">
          <div class="col-10">
            <input type="text" class="form-control" placeholder="Detail">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Price">
          </div>
          <button type="button" class="btn btn-success btn-sm">Comfirm</button>
        </div>
      </form>
      <div class="d-flex justify-content-center mb-3 h3">List bill</div>
      <table class="table table-borderless border table-light text-center">
        <thead>
          <tr class="table-bordered">
            <th scope="col">Detail</th>
            <th scope="col">Price</th>
            <th scope="col" class="float-right pr-5">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(req, index) in requests" :key="index">
            <th scope="row">Air</th>
            <td scope="row">$500</td>
            <td scope="row" class="float-right">
              <button type="button" class="btn btn-secondary btn-sm">Edit</button>
              <button type="button" class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
          <tr v-for="(req, index) in requests" :key="index">
            <th scope="row">Air</th>
            <td scope="row">$500</td>
            <td scope="row" class="float-right">
              <button type="button" class="btn btn-secondary btn-sm">Edit</button>
              <button type="button" class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
          <tr class="border-top" v-for="(req, index) in requests" :key="index">
            <th scope="row">Total</th>
            <td scope="row">$500</td>
            <td scope="row" class="float-right"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>