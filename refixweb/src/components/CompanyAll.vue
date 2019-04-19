<template>
    <div class="container" id="all">
        <div class="header">
            <h3 style="text-align:start">Appliance</h3>
        </div>
        <div class="in-card row" style="height: 325;">
            <div class="card card-info" style="width: 13rem; height: 19.5rem" v-for="{name, desc, id} in company" :key="id">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"
                class="card-img-top"
                alt="Image company">
                <div class="card-body">
                    <h5 class="card-title">ABC Home Inc.</h5>
                    <p class="card-text">Bangkok</p>
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
                }
            ]
        }
    }
}
</script>

<style>

#all {
    margin-top: 20px;
    font-family: 'Playfair Display', serif;
}
.card-info {
    color: black;
    position: relative;
    display: inline-block;
    font-family: 'Playfair Display', serif;
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
.card-info::after {
    opacity: 0;
}
.card-info:hover {
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
}
.card-info:hover::after {
    opacity: 1;
}
</style>
