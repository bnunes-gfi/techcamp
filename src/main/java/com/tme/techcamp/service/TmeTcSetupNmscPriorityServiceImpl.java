package com.tme.techcamp.service;

import com.tme.techcamp.model.TmeTcSetupNmscPriority;
import com.tme.techcamp.repository.TmeTcSetupNmscPriorityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TmeTcSetupNmscPriorityServiceImpl implements TmeTcSetupNmscPriorityService {

    @Autowired
    private TmeTcSetupNmscPriorityRepository tmeTcSetupNmscPriorityRepository;

    @Override
    public Iterable<TmeTcSetupNmscPriority> getAllTmeTcSetupNmscPriority() {

        return tmeTcSetupNmscPriorityRepository.findAll();
    }

    @Override
    public TmeTcSetupNmscPriority saveTmeTcSetupNmscPriority(TmeTcSetupNmscPriority tmeTcSetupNmscPriority) {

        tmeTcSetupNmscPriorityRepository.save(tmeTcSetupNmscPriority);

        return tmeTcSetupNmscPriority;
    }

}

