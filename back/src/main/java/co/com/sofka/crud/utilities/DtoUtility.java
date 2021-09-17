package co.com.sofka.crud.utilities;
import co.com.sofka.crud.entity.GroupList;
import co.com.sofka.crud.entity.Todo;
import co.com.sofka.crud.entity.dto.*;
import org.modelmapper.ModelMapper;

public class DtoUtility {

    public static DTOGroupList convertToDtoGroupList(GroupList obj){
        DTOGroupList dto = new DTOGroupList();
        dto.setName(obj.getName());
        dto.setId(obj.getId());
        return dto;
    }

    public static DTOTodo convertToDtoTodo(Todo obj){
        DTOTodo dto = new DTOTodo();
        dto.setName(obj.getName());
        dto.setId(obj.getId());
        dto.setGroupListId(obj.getGroupListId());
        dto.setCompleted(obj.isCompleted());
        return dto;
    }



}
