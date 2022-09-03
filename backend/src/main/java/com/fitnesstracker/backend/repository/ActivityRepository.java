package com.fitnesstracker.backend.repository;
import com.fitnesstracker.backend.model.Activity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<Activity, Integer> {

}
