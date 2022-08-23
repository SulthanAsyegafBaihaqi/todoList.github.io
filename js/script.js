// array yang akan menampung beberapa object yang berisi data todo user
const todos = [];
// untuk menfenisikan Custom Event yang dignakan sebagai patokan pada perubahan data variabel todos
const RENDER_EVENT = "render-todo";

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo();
  });
});

function addTodo() {
  // untuk mengambil value yang diinput oleh user yang tersimpan pada sebuah variabel
  const textTodo = document.getElementById("title").value;
  const timestamp = document.getElementById("date").value;

  const generatedID = generatedId();
  const todoObject = generateTodoObject(generatedID, textTodo, timestamp, false);
  // object baru tersimpan pada array todos menggunakan metode push
  todos.push(todoObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
}

// berfungsi menghasilkan identitas unik pada setiap item todo
// memanfaatkan +new Data() untuk mendapatkan timestamp pada js
function generatedId() {
  return +new Date();
}

// berfungsi untuk membuat object baru dari data yang disediakan dari inputan
function generateTodoObject(id, task, timestamp, isCompleted) {
  return {
    id,
    // nama todo
    task,
    // waktu
    timestamp,
    // penanda apakah todo selesai/belum
    isCompleted,
  };
}

document.addEventListener(RENDER_EVENT, function () {
  console.log(todos);
});

function makeTodo(todoObject) {
  const textTitle = document.createElement("h2");
  textTitle.innerText = todoObject.task;

  const textTimestamp = document.createElement("p");
  textTimestamp.innerText = todoObject.timestamp;

  const container = document.createElement("div");
  container.classList.add("inner");
  textContainer.append(textTitle, textTimestamp);
}
