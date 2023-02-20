let friends = [];

while (true) {
  let newFriend = prompt("Enter the name of your friend: ");
  friends.push(newFriend);
  console.log(friends);

  let quit = prompt('enter "q" to quit, press any button to continue');
  if (quit === "q") {
    break;
  }
}
