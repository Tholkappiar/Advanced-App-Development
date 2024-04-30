package com.backend.edugateway.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.edugateway.Entity.EnrollEntity;
import com.backend.edugateway.Entity.PaymentEntity;
import com.backend.edugateway.Repository.EnrollRepository;
import com.backend.edugateway.dto.EnrollCourseUpdate;

@Service
public class EnrollService {

    @Autowired
    private EnrollRepository enrollRepository;

    @Autowired
    private PaymentService paymentService;

    public List<EnrollEntity> getAllEnrollments() {
        return enrollRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<EnrollEntity> getEnrollmentById(Long id) {
        return enrollRepository.findById(id);
    }

    @SuppressWarnings("null")
    public EnrollEntity createEnrollment(EnrollEntity enrollEntity) {
        // Post the data to the payment table
        EnrollEntity responseData = enrollRepository.save(enrollEntity);
        // if payment inserted into the table , insert the data to the payment table too
        PaymentEntity payment = new PaymentEntity();
        if (responseData != null) {
            payment.setAddress(enrollEntity.getAddress());
            payment.setCourses(enrollEntity.getCourseName());
            payment.setName(enrollEntity.getName());
            payment.setDate(enrollEntity.getDob());
            payment.setStatus(false);
        }

        paymentService.createPayment(payment);
        return responseData;
    }

    @SuppressWarnings("null")
    public void deleteEnrollment(Long id) {
        enrollRepository.deleteById(id);
    }

    public List<EnrollEntity> getEnrollmentByName(String name) {
        return enrollRepository.findByName(name);
    }

    @SuppressWarnings("null")
    public EnrollEntity updateEnrollment(Long id, EnrollCourseUpdate enrollCourseUpdate) {
        Optional<EnrollEntity> updateEnrollment = enrollRepository.findById(id);
        if (updateEnrollment.isPresent()) {
            EnrollEntity updatedEnrollment = updateEnrollment.get();
            updatedEnrollment.setName(enrollCourseUpdate.getName().toLowerCase().trim());
            updatedEnrollment.setEmail(enrollCourseUpdate.getEmail().trim());
            updatedEnrollment.setGender(enrollCourseUpdate.getGender().toLowerCase().trim());
            updatedEnrollment.setMobile(enrollCourseUpdate.getMobile().toLowerCase().trim());
            updatedEnrollment.setDob(enrollCourseUpdate.getDob().toLowerCase().trim());
            updatedEnrollment.setSslc(enrollCourseUpdate.getSslc());
            updatedEnrollment.setHsc(enrollCourseUpdate.getHsc());
            updatedEnrollment.setAge(enrollCourseUpdate.getAge());
            updatedEnrollment.setCountry(enrollCourseUpdate.getCountry().toLowerCase().trim());
            updatedEnrollment.setAddress(enrollCourseUpdate.getAddress().toLowerCase().trim());
            return enrollRepository.save(updatedEnrollment);
        }
        return null;
    }
}
