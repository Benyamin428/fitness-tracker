package com.fitnesstracker.backend.service;

import com.fitnesstracker.backend.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.fitnesstracker.backend.model.Activity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityService {

    @Autowired
    private ActivityRepository activityRepository;

    public Activity saveActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    public List<Activity> getAll() {
        return activityRepository.findAll();
    }

    public boolean updateById(Activity newActivity, int id) {
        Activity activityToUpdate = activityRepository.findById(id).orElse(null);

        if (activityToUpdate == null) {
            return false;
        }

        activityToUpdate.setActivity(newActivity.getActivity());
        activityToUpdate.setDetails(newActivity.getDetails());
        activityToUpdate.setNotes(newActivity.getNotes());

        activityRepository.save(activityToUpdate);
        return true;
    }

    public boolean deleteById(int id) {
        Activity activityToDelete = activityRepository.findById(id).orElse(null);

        if (activityToDelete == null) {
            return false;
        }

        activityRepository.delete(activityToDelete);
        return true;
    }

}
