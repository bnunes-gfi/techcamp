package com.tme.techcamp.controller;

import com.tme.techcamp.model.TmeTcSetupNmscPriority;
import com.tme.techcamp.service.TmeTcSetupNmscPriorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tmetcsetupnmscpriority")
public class TmeTcSetupNmscPriorityRestController {

    @Autowired
    private TmeTcSetupNmscPriorityService tmeTcSetupNmscPriorityService;

    @GetMapping("/list")
    public Iterable<TmeTcSetupNmscPriority> getAllTmeTcSetupNmscPriority(){

        return tmeTcSetupNmscPriorityService.getAllTmeTcSetupNmscPriority();
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(path = "/save", method = RequestMethod.PUT)
    public TmeTcSetupNmscPriority saveUser(@RequestBody TmeTcSetupNmscPriority tmeTcSetupNmscPriority) {

        tmeTcSetupNmscPriorityService.saveTmeTcSetupNmscPriority(tmeTcSetupNmscPriority);

        return tmeTcSetupNmscPriority;
    }
}
