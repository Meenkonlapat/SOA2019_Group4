<template>
  <div id="messager" class="container">
    <div class="row">
      <div class="col-4">
        <div class="row p-2">
          <div class="col-2 pt-1">
            <img src="../assets/user-2.svg" alt class="imgContact">
          </div>
          <div class="col-9">
            <div class="row nameContact">
              <b>ABC Home Inc.</b>
            </div>
            <div class="row contactMessage">You: What you's name?</div>
          </div>
        </div>
        <!-- new contact -->
        <div class="row p-2">
          <div class="col-2 pt-1">
            <img src="../assets/user-2.svg" alt class="imgContact">
          </div>
          <div class="col-9">
            <div class="row nameContact">
              <b>ABC Home Inc.</b>
            </div>
            <div class="row contactMessage">You: What you's name?</div>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="row-md-2">
          <p class="nameContact p-1">ABC Home Inc.</p>
        </div>
        <div class="row-md-8 p-2" id="messagerBox" style="border:1px solid black">
            <div class="col contacter">
                <img src="../assets/user-2.svg" style="width: 30px;height: 30px;">
                Hello
            </div>
            <div class="col you">
                Bello
                <img src="../assets/user-2.svg" style="width: 30px;height: 30px;">
            </div>
        </div>
        <div class="row-md-2 align-items-end">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Type a message."
              aria-describedby="button-addon1"
            >
            <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <!-- temporary code for getting chat message here -->
    <p>you are : {{user}}</p>
    <p>talking to : {{targetUser.name}}</p>
    <hr>
    <p>set user</p>
    <!-- there should be "fake login" button to set user in login page and keep current user in store.js-->
    <button @click="user = 'mr A'">mr A</button>
    <button @click="user = 'mr B'">mr B</button>
    <button @click="user = 'company A'">company A</button>
    <button @click="user = 'company B'">company B</button>
    <hr>
    <p>set chat target</p>
    <!-- this should be set when click on contact button in company page -->
    <button @click="targetUser.name = 'mr A'">mr A</button>
    <button @click="targetUser.name = 'mr B'">mr B</button>
    <button @click="targetUser.name = 'company A'">company A</button>
    <button @click="targetUser.name = 'company B'">company B</button>
    <hr>
    <div v-if="targetUser.name">
      <div v-for="(text, index) in chat" :key="index" v-chat-scroll>
        {{user}} : {{text.user}} : {{text.targetUser.name}}
        <h1>first condition : {{text.user == user}}</h1>
        <h1>second condition : {{text.targetUser.name == user}}</h1>
        <!-- maybe this should be && ====> V change this later -->
        <template v-if="text.user == user || text.targetUser.name == user">
          <h3>{{ text.user }}</h3>
          <p>{{ text.message }}</p>
        </template>
      </div>
      <div>
        <input type="text" v-model="message">
        <button @click="sendMessage">send</button>
      </div>
    </div>
    <!-- temporary code for getting chat message end here -->
  </div>
</template>

<script>
import Vue from "vue";
import io from "socket.io-client";
import VueChatScroll from "vue-chat-scroll";

Vue.use(VueChatScroll);

export default {
  data() {
    return {
      user: "mr A",
      message: "",
      chat: [],
      socket: io("https://contact-dot-soa2019.appspot.com"),
      targetUser: {
        name: "",
        id: ""
      }
    };
  },
  methods: {
    sendMessage() {
      this.socket.emit("sendMessage", {
        user: this.user,
        message: this.message,
        targetUser: this.targetUser
      });
      this.message = "";
    }
  },
  mounted() {
    this.socket.on("message", data => {
      this.chat.push(data);
    });
  }
};
</script>


<style>
#messager {
  font-family: "Playfair Display", serif;
}
.imgContact {
  width: 40px;
  height: 40px;
}
.nameContact {
  font-size: 16px;
  text-align: center;
}
.contactMessage {
  font-size: 15px;
  opacity: 0.8;
}
.contacter{
    text-align: start;
}
.you{
    text-align: end;
}
</style>