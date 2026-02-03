const todos = [];

const form = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');
const popBtn = document.getElementById('popBtn');
const clearBtn = document.getElementById('clearBtn');
const count = document.getElementById('count');

// Menampilkan array ke DOM/HTML
function render(){
    todoList.innerHTML = "";

    if(todos.length === 0){
        todoList.innerHTML = '<li>Tidak ada tugas</li>';
    } else {
        for(let i = 0; i < todos.length; i++){
            const li = document.createElement('li');
            li.className = "bg-gray-200 p-2 rounded-lg"
            li.textContent = todos[i];
            todoList.appendChild(li);
        }
    }

    count.textContent = todos.length;

    popBtn.disabled = todos.length === 0;
}

// Menambahkan tugas baru
form.addEventListener("submit", function(event){
    event.preventDefault();

    const value = taskInput.value.trim();
    if(value === "") return;

    todos.push(value);
    taskInput.value = "";
    render();
});

// Hapus tugas terakhir
popBtn.addEventListener("click", function(){
    if(todos.length === 0) return;

    const removed = todos.pop();

    console.log("Dihapus", removed);
    render();
});

// Hapus semua tugas
clearBtn.addEventListener("click", function(){
    todos.length = 0;
    render();
});

render();
taskInput.focus();