package com.fitnesstracker.backend.controller;

import com.fitnesstracker.backend.model.Activity;
import com.fitnesstracker.backend.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.lang.Integer.parseInt;

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

    @PutMapping("/activities/{id}")
    public  ResponseEntity<?> updateActivity(@RequestBody Activity newActivity, @PathVariable String id) {
        boolean isUpdated = activityService.updateById(newActivity, parseInt(id));

        if (isUpdated == false) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Couldn't find an activity to update with that id");
        }

        return ResponseEntity.status(HttpStatus.OK).body("Activity updated successfully");
    }

    @DeleteMapping("/activity/{id}")
    public ResponseEntity<?> deleteActivity(@PathVariable String id) {
        boolean isDeleted = activityService.deleteById(parseInt(id));

        if (isDeleted == false) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Couldn't find an activity to delete with that id");
        }

        return ResponseEntity.status(HttpStatus.OK).body("Activity deleted successfully");
    }
}
