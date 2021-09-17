package co.com.sofka.crud.service;

import co.com.sofka.crud.entity.GroupList;
import co.com.sofka.crud.entity.Todo;
import co.com.sofka.crud.entity.dto.DTOGroupList;
import co.com.sofka.crud.entity.dto.DTOTodo;
import co.com.sofka.crud.repository.GroupListRepository;
import co.com.sofka.crud.utilities.DtoUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class GroupListService {

    @Autowired
    private GroupListRepository repository;

    public Iterable<DTOGroupList> list(){
        Iterable<GroupList> obj=repository.findAll();
        ArrayList<DTOGroupList> returnable= new ArrayList<>();
        obj.forEach((element) ->{
            returnable.add(DtoUtility.convertToDtoGroupList(element));
        });
        return returnable;
    }

    public DTOGroupList save(GroupList groupList){

        return DtoUtility.convertToDtoGroupList(repository.save(groupList));
    }

    public void delete(Long id){

        repository.delete(repository.findById(id).orElseThrow());
    }

    public DTOGroupList get(Long id){

        return DtoUtility.convertToDtoGroupList(repository.findById(id).orElseThrow());
    }



}
