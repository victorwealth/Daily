# Daily

## Introduction

>A quick, simple and easy way to create todo items. Created with HTML, CSS and JS. Todo items are stored in browser's localStorage.
So it keeps track of your list (on your device) even when your browser is closed.

## Code Samples

> Code sample showing how a todo item is saved to browser's localStorage using localForage

            this.todos.push({
                todoText: newTodo.value, 
                completed: false
            });
            
            //save to local db
            view.saveTodosToForage();

            newTodo.value = '';
            view.displayTodos();

## Preview
![alt text](https://github.com/victorwealth/Daily/blob/master/daily-preview.png)
        

## How to use

> Just launch https://victorwealth.github.io/Daily/ to see how it works

## Bugs
> Checkbox for selecting "Done" items does not appear but check event works.

## Contributors welcome
> Though project was intended for practice, contributors are welcome. Please feel free.

## Credit
>@gordonmzhu for a great intro to JS
