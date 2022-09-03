package com.fitnesstracker.backend.service;

import com.fitnesstracker.backend.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.fitnesstracker.backend.model.Activity;
import org.springframework.stereotype.Service;

@Service
public class ActivityService {

    @Autowired
    private ActivityRepository activityRepository;

    public Activity saveActivity(Activity activity) {
        return activityRepository.save(activity);
    }

}
