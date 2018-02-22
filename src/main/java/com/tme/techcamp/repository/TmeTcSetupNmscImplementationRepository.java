package com.tme.techcamp.repository;

import com.tme.techcamp.model.TmeTcSetupNmscImplementation;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface TmeTcSetupNmscImplementationRepository extends CrudRepository<TmeTcSetupNmscImplementation, Long> {
}
