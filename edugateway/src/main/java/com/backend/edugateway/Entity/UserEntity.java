package com.backend.edugateway.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "Users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String number;
    private Integer sslc;
    private Integer hsc;
    private String roles;

    // @OneToOne
    // @JoinColumn(name = "College_Id", referencedColumnName = "CollegeId")
    // private CollegeEntity collegeEntity;
}
