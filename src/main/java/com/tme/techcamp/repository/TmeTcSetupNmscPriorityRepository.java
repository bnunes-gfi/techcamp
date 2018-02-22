package com.tme.techcamp.repository;

import com.tme.techcamp.model.TmeTcSetupNmscPriority;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface TmeTcSetupNmscPriorityRepository extends CrudRepository<TmeTcSetupNmscPriority, Long> {
}
