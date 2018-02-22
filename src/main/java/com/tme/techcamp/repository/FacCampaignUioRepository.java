package com.tme.techcamp.repository;

import com.tme.techcamp.model.FacCampaignUio;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface FacCampaignUioRepository  extends CrudRepository<FacCampaignUio, Long> {
}
