package com.tme.techcamp.controller;

import com.tme.techcamp.model.DimNmscUio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.tme.techcamp.service.DimNmscUioService;

@RestController
@RequestMapping("/dimnmscuio")
public class DimNmscUioRestController {

    @Autowired
    private DimNmscUioService dimNmscUioService;

    @GetMapping("/list")
    public Iterable<DimNmscUio> getAllDimNmscUio(){

        return dimNmscUioService.getAllDimNmscUio();
    }
}
