"use strict";

const socket = io("http://localhost:3000");
// const socket = io("https://servu.norwayeast.cloudapp.azure.com");

const roomNumber = document.querySelector("#roomName");

document.querySelector("#msg-input").addEventListener("submit", (event) => {
  event.preventDefault();
  const inp = document.getElementById("message");
  socket.emit("chat message", inp.value);
  inp.value = "";
});

document.querySelector("#join").addEventListener("submit", (event) => {
  const username = document.getElementById("username");
  const room = document.querySelector('input[name="room"]:checked').value;
  socket.emit("join", username.value, room);
  username.value = "";
  document.querySelector("#join").style.display = "none";
  document.querySelector("#chat-room").style.display = "block";
  document.querySelector("#msg-input").style.display = "block";
  document.querySelector("#log-out").style.display = "block";
  roomName.innerHTML = "Liityit huoneeseen " + room;
  event.preventDefault();
});

socket.on("chat message", (msg, username) => {
  const item = document.createElement("li");
  item.classList.add("bg-sandbrown", "p-3", "text-black", "w-fit", "m-5");
  item.innerHTML = `<b> ${username}: </b>` + msg;

  messages.appendChild(item);
  autoScroll();
});
const autoScroll = () => {
  const messages = document.getElementById("messages");
  const newMessage = messages.lastElementChild;
  const newMessageStyles = getComputedStyle(newMessage);
  const newMessageMargin = parseInt(newMessageStyles.marginBottom);
  const newMessageHeight = newMessage.offsetHeight + newMessageMargin;
  const visibleHeight = messages.offsetHeight;
  const containerHeight = messages.scrollHeight;
  const scrollOffset = messages.scrollTop + visibleHeight;
  if (containerHeight - newMessageHeight <= scrollOffset) {
    messages.scrollTop = messages.scrollHeight;
  }
};
document.querySelector("#log-out").addEventListener("click", (event) => {
  event.preventDefault();
  socket.emit("leave");
  document.querySelector("#join").style.display = "block";
  document.querySelector("#msg-input").style.display = "none";
  document.querySelector("#log-out").style.display = "none";
  document.querySelector("#chat-room").style.display = "none";
  messages.innerHTML = "";
  return false;
});

socket.on("response", (msg) => {
  console.log(msg);
});

const toggleChatButton = document.getElementById("toggle-chat");

const chatSection = document.getElementById("chat-section");
let isChatOpen = true;

toggleChatButton.addEventListener("click", (e) => {
  toggleChat();
});

const toggleChat = () => {
  if (isChatOpen) {
    chatSection.classList.add("hidden");
    toggleChatButton.innerHTML = "";
    toggleChatButton.innerHTML = "Avaa Chat";
    isChatOpen = false;
  } else {
    chatSection.classList.remove("hidden");
    toggleChatButton.innerHTML = "";
    toggleChatButton.innerHTML = "Sulje Chat";
    isChatOpen = true;
  }
};
