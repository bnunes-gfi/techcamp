package com.tme.techcamp.service;

import com.tme.techcamp.model.DimNmscUio;
import com.tme.techcamp.repository.DimNmscUioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DimNmscUioServiceImpl implements DimNmscUioService {

    @Autowired
    private DimNmscUioRepository dimNmscUioRepository;

    @Override
    public Iterable<DimNmscUio> getAllDimNmscUio() {

        return dimNmscUioRepository.findAll();
    }
}
