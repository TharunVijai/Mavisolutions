package com.mavi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.mavi.model.User;
import com.mavi.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService service;

    // REGISTER
    @PostMapping("/register")
    public User register(@RequestBody User user) {

        return service.register(user);
    }

    // LOGIN
    @PostMapping("/login")
    public User login(@RequestBody User user) {

        return service.login(
                user.getEmail(),
                user.getPassword()
        );
    }
}