<template>
  <div id="messager" class="wrapper">
    <div class="container chat-box-msg">
      <aside class="user">
        <header>
          <h1>Messenger</h1>
        </header>
        <ul>
          <li v-for="(contact, index) in contacts" :key="index" @click="setTargetUser(contact)">
            <div class="avatar top">
              <img src="../assets/user-2.svg" alt>
              <div class="online"></div>
            </div>
            <div class="user-list">
              <div class="user">
                <p v-if="isCompany">{{ contact.customerName }}</p>
                <p v-else>{{ contact.companyName }}</p>
              </div>
              <div class="text">
                <!-- <p>{{ contact.chat[contact.chat.length-1].message}}</p> -->
              </div>
            </div>
            <div class="time-stamp">
              <!-- <p>{{ contact.chat[contact.chat.length-1].date}}</p> -->
            </div>
          </li>
        </ul>
      </aside>
      <section id="chat-screen">
        <section id="message">
          <article
            :class="{right: chat.sender == currentUser.name}"
            v-for="(chat, index) in chats"
            :key="index"
          >
            <div class="avatar">
              <img src="../assets/user-2.svg" alt>
            </div>
            <div class="msg">
              <div class="pointer"></div>
              <div class="inner-msg">
                <p>{{ chat.message }}</p>
              </div>
            </div>
          </article>
        </section>
        <div class="msg-compose">
          <textarea placeholder="Say something..." v-model="message" @keydown.enter="sendMessage()" />
          <font-awesome-icon icon="paper-plane" class="icon" @click="sendMessage()"></font-awesome-icon>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import io from "socket.io-client";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPaperclip);
library.add(faPaperPlane);

Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {
  data() {
    return {
      user: {
        name: "",
        ID: ""
      },
      message: "",
      contacts: [],
      socket: io("https://contact-dot-refixsoa2019.appspot.com"),
      targetUser: {
        name: "",
        id: ""
      },
      chats: []
    };
  },
  computed: {
    currentUser: {
      get() {
        return this.$store.getters["getCurrentUser"];
      }
    },
    isCompany: {
      get() {
        return this.$store.getters["getIsCompany"];
      }
    }
  },
  methods: {
    sendMessage() {
      this.user = this.currentUser;
      this.socket.emit("sendMessage", {
        sender: this.user.name,
        message: this.message
      });
      this.$http.put(
        "https://contact-dot-refixsoa2019.appspot.com/api/contact",
        { sender: this.user.name, message: this.message },
        { params: { companyId: this.targetUser.id, customerId: this.user.ID } }
      );
      this.message = "";
    },
    setTargetUser(contact) {
      this.targetUser.id = contact.companyId;
      this.targetUser.name = contact.companyName;
      this.chats = contact.chat;
    }
  },
  mounted() {
    this.socket.on("message", data => {
      this.chats.push(data);
    });
  },
  created() {
    this.$http
      .get("https://contact-dot-refixsoa2019.appspot.com/api/contact")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const result = [];
        for (let key in data) {
          if (this.isCompany) {
            if (data[key].companyId == this.currentUser.ID){
              result.push(data[key]);
            }
          } else {
            if (data[key].customerId == this.currentUser.ID) {
              result.push(data[key]);
            }
          }
        }
        this.contacts = result;
      });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#messager {
  font-family: "Playfair Display", serif;
  font-weight: 100;
  font-size: 10px;
}
#wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: rgb(204, 204, 204);
  color: #fff;
}
.chat-box-msg {
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 60%;
  height: 80%;
  display: flex;
  overflow: scroll;
  box-shadow: 1rem 2rem 4rem rgba(0, 0, 0, 0.2);
  min-width: 60rem;
}

.user#chat-screen {
  flex-grow: 1;
  height: 100%;
  min-width: 30rem;
}

.user {
  font-size: 1.2rem;
  background-color: #ffffff;
}

#chat-screen {
  background-image: linear-gradient(120deg, #2c92eb 0%, #2857d8 100%);
  background-size: cover;
}

.user header {
  background-color: #ffbb00;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user ul {
  height: 500px;
  list-style-type: none;
  overflow: scroll;
}
.user ul li {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.user ul li:nth-last-child {
  border-bottom: none;
}
.user header h1 {
  color: #fff;
  font-size: 4rem;
  font-weight: 100;
}
.avatar img {
  width: 4.5rem;
  height: 4.6rem;
  /* width: 7.5rem;
  height: 7.6rem; */
  border-radius: 50%;
}
.user .avatar {
  display: flex;
  margin: auto 0;
  padding: 1rem;
  position: relative;
}
.username {
  font-size: 3rem;
}
.user-list {
  flex-grow: 2;
  margin: auto 0;
}
.text {
  font-size: 0.7rem;
  margin: auto 0;
}
.time-stamp {
  font-size: 0.7rem;
  flex-grow: 0.3;
  margin: auto 0;
}
#chat-screen {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 2;
  color: #333;
}
#chat-screen .msg-compose {
  background-color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
#chat-screen .msg-compose textarea {
  font-size: 0.8rem;
  flex-grow: 2;
  margin: 0 1rem;
  resize: none;
  border: none;
  padding-top: 5px;
  height: 2rem;
}
#chat-screen .msg-compose textarea:focus {
  outline: none;
}
#chat-screen .msg-compose .icon {
  color: #258bff;
  cursor: pointer;
  width: 1.7rem;
  height: 1.7rem;
}
#message {
  height: 500px;
  overflow: scroll;
  flex-grow: 2;
  padding: 1rem;
}
#message article {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
}
#message article .avatar {
  margin-right: 1rem;
}
#message .right .avatar {
  margin-right: 0;
}
.msg {
  display: flex;
  justify-content: space-between;
}
.msg .pointer {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 1rem 1.5rem 0;
  border-color: transparent #fff transparent transparent;
  margin: auto;
}
.inner-msg {
  background-color: #fff;
  width: 100%;
  padding: 1.5rem 1rem 1.5rem 1rem;
  border-radius: 0 4px 4px 4px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin: auto;
}
.right {
  flex-direction: row-reverse;
}
.right .msg {
  flex-direction: row-reverse;
}
.right .msg .pointer {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 1.5rem 1rem 0 0;
  border-color: #fff transparent transparent transparent;
  margin: auto 0;
}
.right .msg .inner-msg {
  border-radius: 4px 0 4px 4px;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);
  text-align: right;
}
</style>
