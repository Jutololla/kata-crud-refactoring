package co.com.sofka.crud.Controller;

import co.com.sofka.crud.Entity.Todo;
import co.com.sofka.crud.Entity.TodoList;
import co.com.sofka.crud.Service.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoListController {

    @Autowired
    private TodoListService service;

    @GetMapping(value = "api/todolists")
    public Iterable<TodoList> list(){
        return service.list();
    }

    @PostMapping(value = "api/todolist")
    public TodoList save(@RequestBody TodoList todoList){
        return service.save(todoList);
    }

    @PutMapping(value = "api/todoList")
    public TodoList update(@RequestBody TodoList todoList){
        if(todoList.getId() != null){
            return service.save(todoList);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/todoList")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/todoList")
    public TodoList get(@PathVariable("id") Long id){
        return service.get(id);
    }
}
