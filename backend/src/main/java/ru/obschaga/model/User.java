package ru.obschaga.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import ru.obschaga.dto.UserDto;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity(name = "usr")
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String username;
    private String password;
    private String firstname;
    private String lastname;
    private String avatar;
    private Date birthday;
    @ManyToOne
    private Housing housing;
    private Long floor;
    private Long room;
    private String block;
    private String specialization;
    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean credentialsNonExpired;
    private boolean enabled;

    public User(User user) {
        this.id = user.id;
        this.username = user.username;
        this.password = user.password;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.avatar = user.avatar;
        this.birthday = user.birthday;
        this.housing = user.housing;
        this.floor = user.floor;
        this.block = user.block;
        this.specialization = user.specialization;
        this.accountNonExpired = user.accountNonExpired;
        this.accountNonLocked = user.accountNonLocked;
        this.credentialsNonExpired = user.credentialsNonExpired;
        this.enabled = user.enabled;
    }
}