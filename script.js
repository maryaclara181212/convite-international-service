function generateInvite() {
  const name = document.getElementById("guestName").value.trim();
  const card = document.getElementById("inviteCard");
  const output = document.getElementById("nameOutput");

  if (name.length === 0) {
    alert("Please enter a name.");
    return;
  }

  output.textContent = name;
  card.classList.remove("hidden");
}
