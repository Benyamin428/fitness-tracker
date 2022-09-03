package com.fitnesstracker.backend.controller;

import com.fitnesstracker.backend.model.Activity;
import com.fitnesstracker.backend.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @PostMapping("/add")
    public String add(@RequestBody Activity activity) {
        activityService.saveActivity(activity);
        return "New activity added";
    }
}
