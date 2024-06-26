package com.backend.edugateway.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "Enrollments")
public class EnrollEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String fatherName;
    private String email;
    private String gender;
    private String mobile;
    private String dob;
    private Integer age;
    private Integer sslc;
    private Integer hsc;
    private String country;
    private String address;
    private String collegeName;
    private String courseName;
}
