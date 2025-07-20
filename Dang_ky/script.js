document.getElementById("logup_box").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const exists = users.some((user) => user.username === username);

  document.getElementById("exists").style.visibility = "visible";

  if (exists) {
    message.style.visibility = "visible";
  } else {
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("logup_box").reset();
    window.location.href = "/To-do-list/Dang_nhap/index.html";
  }
});
