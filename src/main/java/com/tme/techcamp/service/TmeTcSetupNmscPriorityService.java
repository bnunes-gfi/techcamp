package com.tme.techcamp.service;

import com.tme.techcamp.model.TmeTcSetupNmscPriority;

import java.lang.Iterable;

public interface TmeTcSetupNmscPriorityService {

    public Iterable<TmeTcSetupNmscPriority> getAllTmeTcSetupNmscPriority();

    public TmeTcSetupNmscPriority saveTmeTcSetupNmscPriority(TmeTcSetupNmscPriority tmeTcSetupNmscPriority);
}

