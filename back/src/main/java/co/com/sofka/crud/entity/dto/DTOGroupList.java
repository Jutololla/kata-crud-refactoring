package co.com.sofka.crud.entity.dto;

public class DTOGroupList implements DTOEntity{

    private Long id;
    private String name;

    public DTOGroupList() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
