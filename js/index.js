'use strict';
    
//console.log("script running...");

// add event listener to todo section
// listen to change event on new todo textbox
var handlers = {
    title: "Handles all events on the page",
    todos: [],
    addTodo: function () {
        //debugger;
        let newTodo = document.getElementById('new-todo');
        
            this.todos.push({
                todoText: newTodo.value, 
                completed: false
            });
            
            //save to local db
            view.saveTodosToForage();

            newTodo.value = '';
            view.displayTodos();
        
    },
    

};

var view = {
    displayTodos: function () {
        
        var Ul = document.querySelector('ul');
        Ul.innerHTML = '';
        
        for (var i = 0; i < handlers.todos.length; i++ )
        {
            var todoLi = document.createElement('li');
            var todo = handlers.todos[i];

            //check if completed
            if (todo.completed){
                todoLi.innerHTML = '<input class="toggle" id="'+ i +'" type="checkbox" checked><label class="strike">'+ todo.todoText +'</label><button class="destroy"></button>';
            }else{
                todoLi.innerHTML = '<input class="toggle" id="'+ i +'" type="checkbox"><label>'+ todo.todoText +'</label><button class="destroy"></button>';
            }
            Ul.appendChild(todoLi);
        }
    },
    displayActiveTodos: function () {
        
        var Ul = document.querySelector('ul');
        Ul.innerHTML = '';
        
        for (var i = 0; i < handlers.todos.length; i++ )
        {
            var todoLi = document.createElement('li');
            var todo = handlers.todos[i];

            //check if completed
            if (!todo.completed){
                todoLi.innerHTML = '<input class="toggle" id="'+ i +'" type="checkbox"><label>'+ todo.todoText +'</label><button class="destroy"></button>';
            }
            Ul.appendChild(todoLi);
        }
    },
    displayCompletedTodos: function () {
       
        var Ul = document.querySelector('ul');
        Ul.innerHTML = '';
        
        for (var i = 0; i < handlers.todos.length; i++ )
        {
            var todoLi = document.createElement('li');
            var todo = handlers.todos[i];

            //check if completed
            if (todo.completed){
                todoLi.innerHTML = '<input class="toggle" id="'+ i +'" type="checkbox" checked><label class="strike">'+ todo.todoText +'</label><button class="destroy"></button>';
            }
            Ul.appendChild(todoLi);
        }
    },
    toggle: function () {
        var Ul = document.querySelector('ul');
        Ul.addEventListener("click", function (e) {

            // Specific element click. In this case - checkbox
            if (e.target.className === "toggle")
            {
                var position = e.target.parentNode.firstChild.id;
                var todo = handlers.todos[position];
                todo.completed = !todo.completed;
                view.saveTodosToForage();

                if (handlers.todos[position].completed){
                    e.target.parentNode.childNodes[1].classList.add("strike");
                }else{
                    e.target.parentNode.childNodes[1].classList.remove("strike");
                }
            }

            // Specific element click. In this case - delete (x)
            if (e.target.className === "destroy")
            {
                var position = e.target.parentNode.firstChild.id;
                //console.log(position); return false;
                handlers.todos.splice(position, 1);
                view.saveTodosToForage();
                view.displayTodos();
                
            }
            
            //e.target.parentNode.firstChild.id
            //console.log(e);
        });
    },
    toggleAll: function () { //debugger;
            var countCompleted = 0;
            var arryLength = handlers.todos.length;

            handlers.todos.forEach(function (item) {
                if (item.completed){
                    countCompleted++;
                }
            });

            if (countCompleted === arryLength)
            {
                handlers.todos.forEach(function (todo) {
                    todo.completed = false;
                    //console.log(item.completed);
                });
            }
            else{
                handlers.todos.forEach(function (todo) {
                    todo.completed = true;
                });
            }
        //});
        this.saveTodosToForage();
        this.displayTodos();
    },
    filterTodos: function () {
        var Ul = document.querySelector('.filters');
        Ul.addEventListener("click", function(e) {
            //console.log(e);

            switch(e.target.className)
            {
                case "all":
                {
                    view.displayTodos();
                    break;
                }
                case "active":
                {
                    view.displayActiveTodos();
                    break;
                }
                case "completed":
                {
                    view.displayCompletedTodos();
                    break;
                }
            }
            
        })
    },
    clearCompleted: function () {
        var clrBtn = document.querySelector(".clear-completed");
        clrBtn.addEventListener('click', function () {
            var todos = handlers.todos;
            /*todos.forEach(function (todo, position) {
                if (todo.completed){
                    handlers.todos.splice(position, 1);
                    console.log(handlers.todos);
                }
            });*/
            debugger;
            var i = handlers.todos.length;
            while (i--)
            {
                if (handlers.todos[i].completed){
                    handlers.todos.splice(i, 1);
                    //console.log(handlers.todos);
                }
            }
           
            view.displayActiveTodos();
            view.removeTodosFromForage();
            view.saveTodosToForage(); // saves todo that is not completed
            //console.log(handlers.todos);
        });
    },
    saveTodosToForage: function () {
        window.localforage.setItem("todos", handlers.todos);
    },
    loadSavedTodos: function () { // called when page reloads
        document.addEventListener("DOMContentLoaded", function () {
            window.localforage.getItem("todos", function (err, result) {
                if(result){
                    // store current local data in array todos
                    result.forEach(function(todo){
                        handlers.todos.push(todo);
                    });
                   
                    
                    //display todos
                    view.displayTodos();

                    //console.log(result);
                }
            });
        });
    },
    removeTodosFromForage: function () {
        window.localforage.clear(); //removes both completed and not completed records
    },

};


view.toggle();
view.filterTodos();
view.clearCompleted();
view.loadSavedTodos();

    
