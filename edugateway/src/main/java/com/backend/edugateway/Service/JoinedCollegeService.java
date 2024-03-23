package com.backend.edugateway.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.edugateway.Entity.JoinedCollege;
import com.backend.edugateway.Repository.JoinedCollegeRepository;

@Service
public class JoinedCollegeService {

    @Autowired
    private JoinedCollegeRepository joinedCollegeRepository;

    public List<JoinedCollege> getAllJoinedStudents() {
        return joinedCollegeRepository.findAll();
    }

    public Optional<JoinedCollege> getJoinedStudentById(Long id) {
        return joinedCollegeRepository.findById(id);
    }

    public JoinedCollege createJoinedStudent(JoinedCollege joinedCollege) {
        return joinedCollegeRepository.save(joinedCollege);
    }

    public void deleteJoinedStudent(Long id) {
        joinedCollegeRepository.deleteById(id);
    }

    public List<JoinedCollege> getJoinedStudentsByName(String name) {
        return joinedCollegeRepository.findByName(name);
    }

    public JoinedCollege updateStudent(Long id, JoinedCollege joinedCollege) {
        Optional<JoinedCollege> updateStudentEntity = joinedCollegeRepository.findById(id);
        if (updateStudentEntity.isPresent()) {
            JoinedCollege existingJoinedStudent = updateStudentEntity.get();
            existingJoinedStudent.setName(joinedCollege.getName());
            existingJoinedStudent.setEmail(joinedCollege.getEmail());
            existingJoinedStudent.setCollege(joinedCollege.getCollege());
            existingJoinedStudent.setCourse(joinedCollege.getCourse());
            existingJoinedStudent.setDate(joinedCollege.getDate());
            return joinedCollegeRepository.save(existingJoinedStudent);
        }
        return null;
    }
}
