package com.adnanlapendic.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(idCounter++, "lapa", "Some description1", new Date(), false));
        todos.add(new Todo(idCounter++, "samila", "Some description2", new Date(), false));
        todos.add(new Todo(idCounter++, "una", "Some description3", new Date(), false));
        todos.add(new Todo(idCounter++, "samila", "Some description4", new Date(), false));
        todos.add(new Todo(idCounter++, "lapa", "Some description5", new Date(), true));
        todos.add(new Todo(idCounter++, "lapa", "Some description6", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    };

    public Todo deleteById(long id) {
        Todo todo = findById(id);

        if(todo == null) {
            return null;
        };

        if(todos.remove(todo)) {
            return todo;
        };

        return null;
    };

    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        };
        return null;
    };

    public Todo save(Todo todo) {
        todo.setId(todos.size());
        todos.add(todo);

        return todo;
    }

    public Todo update(Todo todo) {
        deleteById(todo.getId());
        todos.add(todo);

        return todo;
    }
}

