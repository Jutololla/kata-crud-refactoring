package co.com.sofka.crud.controller;

import co.com.sofka.crud.entity.GroupList;
import co.com.sofka.crud.entity.dto.DTOGroupList;
import co.com.sofka.crud.service.GroupListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class GroupListController {

    @Autowired
    private GroupListService service;

    @GetMapping(value = "api/grouplists")
    public Iterable<DTOGroupList> list(){
        return service.list();
    }

    @PostMapping(value = "api/grouplist")
    public DTOGroupList save(@RequestBody GroupList groupList){
        return service.save(groupList);
    }

    @PutMapping(value = "api/grouplist")
    public DTOGroupList update(@RequestBody GroupList groupList){
        if(groupList.getId() != null){
            return service.save(groupList);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/grouplist")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/grouplist")
    public DTOGroupList get(@PathVariable("id") Long id){
        return service.get(id);
    }
}
