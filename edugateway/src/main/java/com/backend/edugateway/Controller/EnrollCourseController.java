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

import com.backend.edugateway.Entity.EnrollEntity;
import com.backend.edugateway.Service.EnrollService;
import com.backend.edugateway.dto.EnrollCourseUpdate;

/**
 * EnrollController
 */
@RestController
@RequestMapping("/api/enroll")
public class EnrollCourseController {

    @Autowired
    private EnrollService enrollService;

    @GetMapping("/allEnrollments")
    public List<EnrollEntity> getAllEnrollments() {
        return enrollService.getAllEnrollments();
    }

    @GetMapping("/{id}")
    public Optional<EnrollEntity> getEnrollmentById(@PathVariable Long id) {
        return enrollService.getEnrollmentById(id);
    }

    @PostMapping
    public EnrollEntity createEnrollment(@RequestBody EnrollEntity enrollEntity) {
        return enrollService.createEnrollment(enrollEntity);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEnrollment(@PathVariable Long id) {
        enrollService.deleteEnrollment(id);
    }

    @PutMapping("/updateEnrollment/{id}")
    public EnrollEntity updateEnrollment(@PathVariable Long id, @RequestBody EnrollCourseUpdate enrollCourseUpdate) {
        return enrollService.updateEnrollment(id, enrollCourseUpdate);
    }
}
