const chatMessage = document.querySelector("#chatMessage")
const user = document.querySelector("#username")
const button = document.querySelector("#sendChat")
const chats = document.querySelector("#chat")
const userCount = document.querySelector("#userCount")

button.addEventListener("click", () => {
  const username = user.value
  const message = chatMessage.value
  socket.emit("JavaScript", { username: username, message: message })
})

socket.on("JavaScript-joined", (chatMessages) => {
  const chat = chatMessages.map((message) => {
    return `<li>${message.username}: ${message.message}</li>`
  })
  chats.innerHTML = chat.join("")

  //   const count = io.engine.clientsCount
  //   console.log(count)
  const counts = `<div>Users in room: ${count}</div>`
  userCount.innerHTML = counts
})

socket.on("JavaScript", (chat) => {
  const newMessage = `<li>${chat.username}: ${chat.message}</li>`
  chats.insertAdjacentHTML("beforeend", newMessage)
})
