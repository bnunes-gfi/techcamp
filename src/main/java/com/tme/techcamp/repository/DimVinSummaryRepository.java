package com.tme.techcamp.repository;

import com.tme.techcamp.model.DimVinSummary;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface DimVinSummaryRepository extends CrudRepository<DimVinSummary, Long> {

}

