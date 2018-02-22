package com.tme.techcamp.service;

import com.tme.techcamp.model.FacCampaignUio;

public interface FacCampaignUioService {

    public Iterable<FacCampaignUio> getAllFacCampaignUio();

    public FacCampaignUio saveFacCampaignUio(FacCampaignUio facCampaignUio);
}
