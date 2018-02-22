package com.tme.techcamp.controller;

import com.tme.techcamp.service.TmeTcSetupNmscImplementationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tme.techcamp.model.TmeTcSetupNmscImplementation;

@RestController
@RequestMapping("/tmetcsetupnmscimplementation")
public class TmeTcSetupNmscImplementationRestController {

    @Autowired
    private TmeTcSetupNmscImplementationService tmeTcSetupNmscImplementationService;

    @GetMapping("/list")
    public Iterable<TmeTcSetupNmscImplementation> getAllTmeTcSetupNmscImplementation(){

        return tmeTcSetupNmscImplementationService.getAllTmeTcSetupNmscImplementation();
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(path = "/save", method = RequestMethod.PUT)
    public TmeTcSetupNmscImplementation saveUser(@RequestBody TmeTcSetupNmscImplementation tmeTcSetupNmscImplementation) {

        tmeTcSetupNmscImplementationService.saveTmeTcSetupNmscImplementation(tmeTcSetupNmscImplementation);

        return tmeTcSetupNmscImplementation;
    }
}
