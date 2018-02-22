package com.tme.techcamp.repository;

import com.tme.techcamp.model.DimNmscUio;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface DimNmscUioRepository extends CrudRepository<DimNmscUio, Long> {

}
