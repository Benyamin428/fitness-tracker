package com.fitnesstracker.backend.controller;

import com.fitnesstracker.backend.model.Activity;
import com.fitnesstracker.backend.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @PostMapping("/add")
    public String add(@RequestBody Activity activity) {
        activityService.saveActivity(activity);
        return "New activity added";
    }

    @GetMapping("/getAllActivities")
    public List<Activity> getAllActivities() {
        return activityService.getAll();
    }
}
