package com.tme.techcamp.controller;

import com.tme.techcamp.model.FacCampaignUio;
import com.tme.techcamp.service.FacCampaignUioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/faccampaignuio")
public class FacCampaignUioRestController {
    @Autowired
    private FacCampaignUioService facCampaignUioService;

    @GetMapping("/list")
    public Iterable<FacCampaignUio> getAllDimVinSummary(){

        return facCampaignUioService.getAllFacCampaignUio();
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(path = "/save", method = RequestMethod.PUT)
    public FacCampaignUio saveUser(@RequestBody FacCampaignUio facCampaignUio) {

        facCampaignUioService.saveFacCampaignUio(facCampaignUio);

        return facCampaignUio;
    }

}
