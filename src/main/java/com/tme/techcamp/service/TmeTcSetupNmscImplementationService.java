package com.tme.techcamp.service;

import com.tme.techcamp.model.TmeTcSetupNmscImplementation;

import java.lang.Iterable;

public interface TmeTcSetupNmscImplementationService {

    public Iterable<TmeTcSetupNmscImplementation> getAllTmeTcSetupNmscImplementation();

    public TmeTcSetupNmscImplementation saveTmeTcSetupNmscImplementation(TmeTcSetupNmscImplementation tmeTcSetupNmscImplementation);
}


