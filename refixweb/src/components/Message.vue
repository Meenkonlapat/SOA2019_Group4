<template>
    <div id="messager" class="container">
        <div class="row">
            <div class="col-4">
                <div class="row p-2">
                    <div class="col-2 pt-1"><img src="../assets/user-2.svg" alt="" class="imgContact"></div>
                    <div class="col-9">
                        <div class="row nameContact">
                            <b> ABC Home Inc.</b>
                        </div>
                        <div class="row contactMessage">
                            You: What you's name?
                        </div>
                    </div>
                </div>
                <!-- new contact -->
                <div class="row p-2">
                    <div class="col-2 pt-1"><img src="../assets/user-2.svg" alt="" class="imgContact"></div>
                    <div class="col-9">
                        <div class="row nameContact">
                            <b> ABC Home Inc.</b>
                        </div>
                        <div class="row contactMessage">
                            You: What you's name?
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="row-md-2">
                    <p class="nameContact">ABC Home Inc.</p>
                </div>
                <div class="row-md-8">
                </div>
                <div class="row-md-2 align-items-end">
                    <p>sdf</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#messager {
  font-family: "Playfair Display", serif;
}
.imgContact {
  width: 40px;
  height: 40px;
}
.nameContact{
    font-size: 16px;
}
.contactMessage{
    font-size: 15px;
    opacity: 0.8;
}
</style>