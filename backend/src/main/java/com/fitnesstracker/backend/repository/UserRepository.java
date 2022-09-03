package com.fitnesstracker.backend.repository;
import com.fitnesstracker.backend.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    
}
