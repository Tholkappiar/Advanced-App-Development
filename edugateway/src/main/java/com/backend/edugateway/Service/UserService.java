package com.backend.edugateway.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.edugateway.Entity.UserEntity;
import com.backend.edugateway.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserEntity> getAllSignups() {
        return userRepository.findAll();
    }

    public Optional<UserEntity> getSignUpbyId(Long id) {
        return userRepository.findById(id);
    }

    public UserEntity createSignup(UserEntity signup) {
        return userRepository.save(signup);
    }

    public void deleteSignup(Long id) {
        userRepository.deleteById(id);
    }

    public List<UserEntity> getByName(String name) {
        return userRepository.findAllByName(name);
    }

}
