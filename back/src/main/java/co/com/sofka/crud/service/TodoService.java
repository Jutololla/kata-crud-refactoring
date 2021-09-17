package co.com.sofka.crud.service;

import co.com.sofka.crud.entity.Todo;
import co.com.sofka.crud.entity.dto.DTOTodo;
import co.com.sofka.crud.repository.TodoRepository;
import co.com.sofka.crud.utilities.DtoUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    public Iterable<DTOTodo> list(){
        Iterable<Todo> obj=repository.findAll();
        ArrayList<DTOTodo> returnable= new ArrayList<>();
        obj.forEach((element) ->{
            returnable.add(DtoUtility.convertToDtoTodo(element));
        });
        return returnable;
    }

    public DTOTodo save(Todo todo){
        return DtoUtility.convertToDtoTodo(repository.save(todo));
    }

    public void delete(Long id){
        repository.delete(repository.findById(id).orElseThrow());
    }

    public DTOTodo get(Long id){
        return DtoUtility.convertToDtoTodo(repository.findById(id).orElseThrow());
    }

}
