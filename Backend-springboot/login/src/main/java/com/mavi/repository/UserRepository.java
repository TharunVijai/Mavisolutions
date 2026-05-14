package com.mavi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mavi.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}