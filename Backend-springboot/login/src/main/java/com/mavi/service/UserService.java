package com.mavi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mavi.model.User;
import com.mavi.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    // REGISTER
    public User register(User user) {

        return repo.save(user);
    }

    // LOGIN
    public User login(String email, String password) {

        User user = repo.findByEmail(email);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }

        return null;
    }
}