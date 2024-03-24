package com.backend.edugateway.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.edugateway.Entity.JoinedCollege;
import com.backend.edugateway.Service.JoinedCollegeService;

@RestController
@RequestMapping("/api/joinedStudent")
public class JoinedStudentController {

    @Autowired
    private JoinedCollegeService joinedCollegeService;

    @GetMapping("/allStudents")
    public List<JoinedCollege> getAllJoinedStudents() {
        return joinedCollegeService.getAllJoinedStudents();
    }

    @GetMapping("/{id}")
    public Optional<JoinedCollege> getJoinedStudentById(@PathVariable Long id) {
        return joinedCollegeService.getJoinedStudentById(id);
    }

    @PostMapping
    public JoinedCollege createJoinedStudent(@RequestBody JoinedCollege studentEntity) {
        return joinedCollegeService.createJoinedStudent(studentEntity);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteJoinedStudent(@PathVariable Long id) {
        joinedCollegeService.deleteJoinedStudent(id);
    }

    @GetMapping("/getStudent/{name}")
    public List<JoinedCollege> getJoinedStudentsByName(@PathVariable String name) {
        return joinedCollegeService.getJoinedStudentsByName(name);
    }

    @PutMapping("/updateStudent/{id}")
    public JoinedCollege updateJoinedStudent(@PathVariable Long id, @RequestBody JoinedCollege studentEntity) {
        return joinedCollegeService.updateStudent(id, studentEntity);
    }
}