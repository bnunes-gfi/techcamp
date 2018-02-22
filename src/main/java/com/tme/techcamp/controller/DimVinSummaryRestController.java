package com.tme.techcamp.controller;

import com.tme.techcamp.model.DimVinSummary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tme.techcamp.service.DimVinSummaryService;

@RestController
@RequestMapping("/dimvinsummary")
public class DimVinSummaryRestController {

    @Autowired
    private DimVinSummaryService dimVinSummaryService;

    @GetMapping("/list")
    public Iterable<DimVinSummary> getAllDimVinSummary(){

        return dimVinSummaryService.getAllDimVinSummary();
    }
}




