document.getElementById("login_box").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const exists = users.some(
    (user) => user.username === username && user.password === password
  );

  const message = document.getElementById("exists");

  if (exists) {
    window.location.href = "/To-do-list/Trang_chu/index.html";
  } else {
    message.style.visibility = "visible";
  }
});
