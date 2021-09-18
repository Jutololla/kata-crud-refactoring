package co.com.sofka.crud.controller;

import co.com.sofka.crud.entity.*;
import co.com.sofka.crud.entity.dto.DTOTodo;
import co.com.sofka.crud.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class TodoController {

    @Autowired
    private TodoService service;

    @GetMapping(value = "api/todos")
    public Iterable<DTOTodo> list(){
        return service.list();
    }
    
    @PostMapping(value = "api/todo")
    public DTOTodo save(@RequestBody Todo todo){
        return service.save(todo);
    }

    @PutMapping(value = "api/todo")
    public DTOTodo update(@RequestBody Todo todo){
        if(todo.getId() != null){
            return service.save(todo);
        }
        throw new RuntimeException("No existe el id para actualizar");
    }

    @DeleteMapping(value = "api/{id}/todo")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/todo")
    public DTOTodo get(@PathVariable("id") Long id){
        return service.get(id);
    }

}
