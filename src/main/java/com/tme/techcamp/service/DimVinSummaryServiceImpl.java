package com.tme.techcamp.service;

import com.tme.techcamp.model.DimVinSummary;
import org.springframework.beans.factory.annotation.Autowired;
import com.tme.techcamp.repository.DimVinSummaryRepository;
import org.springframework.stereotype.Service;

@Service
public class DimVinSummaryServiceImpl implements DimVinSummaryService {

    @Autowired
    private DimVinSummaryRepository dimVinSummaryRepository;

    @Override
    public Iterable<DimVinSummary> getAllDimVinSummary() {

        return dimVinSummaryRepository.findAll();
    }
}
