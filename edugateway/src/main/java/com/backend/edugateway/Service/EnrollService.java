package com.backend.edugateway.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.edugateway.Entity.EnrollEntity;
import com.backend.edugateway.Repository.EnrollRepository;

@Service
public class EnrollService {

    @Autowired
    private EnrollRepository enrollRepository;

    public List<EnrollEntity> getAllEnrollments() {
        return enrollRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<EnrollEntity> getEnrollmentById(Long id) {
        return enrollRepository.findById(id);
    }

    @SuppressWarnings("null")
    public EnrollEntity createEnrollment(EnrollEntity enrollEntity) {
        return enrollRepository.save(enrollEntity);
    }

    @SuppressWarnings("null")
    public void deleteEnrollment(Long id) {
        enrollRepository.deleteById(id);
    }

    public List<EnrollEntity> getEnrollmentByName(String name) {
        return enrollRepository.findByName(name);
    }

    @SuppressWarnings("null")
    public EnrollEntity updateEnrollment(Long id, EnrollEntity enrollEntity) {
        Optional<EnrollEntity> updateEnrollment = enrollRepository.findById(id);
        if (updateEnrollment.isPresent()) {
            EnrollEntity updatedEnrollment = updateEnrollment.get();
            updatedEnrollment.setName(enrollEntity.getName());
            updatedEnrollment.setEmail(enrollEntity.getEmail());
            updatedEnrollment.setGender(enrollEntity.getGender());
            updatedEnrollment.setMobile(enrollEntity.getMobile());
            updatedEnrollment.setDob(enrollEntity.getDob());
            updatedEnrollment.setSslc(enrollEntity.getSslc());
            updatedEnrollment.setHsc(enrollEntity.getHsc());
            updatedEnrollment.setAge(enrollEntity.getAge());
            updatedEnrollment.setCountry(enrollEntity.getCountry());
            updatedEnrollment.setAddress(enrollEntity.getAddress());
            return enrollRepository.save(updatedEnrollment);
        }
        return null;
    }
}
