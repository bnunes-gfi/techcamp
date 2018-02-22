package com.tme.techcamp.service;

import com.tme.techcamp.model.FacCampaignUio;
import com.tme.techcamp.repository.FacCampaignUioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FacCampaignUioServiceImpl implements FacCampaignUioService {
    @Autowired
    private FacCampaignUioRepository facCampaignUioRepository;

    @Override
    public Iterable<FacCampaignUio> getAllFacCampaignUio() {

        return facCampaignUioRepository.findAll();
    }

    @Override
    public FacCampaignUio saveFacCampaignUio(FacCampaignUio facCampaignUio) {

        facCampaignUioRepository.save(facCampaignUio);

        return facCampaignUio;
    }
}
