package com.tme.techcamp.service;

import com.tme.techcamp.repository.TmeTcSetupNmscImplementationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.tme.techcamp.model.TmeTcSetupNmscImplementation;
import org.springframework.stereotype.Service;

@Service
public class TmeTcSetupNmscImplementationServiceImpl implements TmeTcSetupNmscImplementationService {

    @Autowired
    private TmeTcSetupNmscImplementationRepository tmeTcSetupNmscImplementationRepository;

    @Override
    public Iterable<TmeTcSetupNmscImplementation> getAllTmeTcSetupNmscImplementation() {

        return tmeTcSetupNmscImplementationRepository.findAll();
    }

    @Override
    public TmeTcSetupNmscImplementation saveTmeTcSetupNmscImplementation(TmeTcSetupNmscImplementation tmeTcSetupNmscImplementation) {

        tmeTcSetupNmscImplementationRepository.save(tmeTcSetupNmscImplementation);

        return tmeTcSetupNmscImplementation;
    }

}
