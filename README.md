# Daily - A simple todo app

## Introduction

>A quick, simple and easy way to create todo items. Created with HTML, CSS and JS. Todo items are stored in browser's localStorage.
It keeps track of your list (on your device) even when your browser is closed.

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

## Improvement
> A lot can be done to improve this app. While the goal is to keep it simple, the following improvement comes to mind:
> 1. Feature to set reminder for each item.
> 2. Push notification when reminders are triggered.
> 3. A way to synchronize todo items across multiple devices.
> 4. UI can be improved to use CSS animations when adding, updating and deleting items.

## Contributors welcome
> Though project was intended for practice, contributors are welcome. Please feel free.

## Credit
>@gordonmzhu for a great intro to JS
