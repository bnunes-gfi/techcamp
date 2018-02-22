package com.tme.techcamp.loader;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class GenericLoader implements ApplicationListener<ContextRefreshedEvent> {

    // private xxxxxRepository xxxxRepository;

    private static final Logger logger = LoggerFactory.getLogger(GenericLoader.class);

    //@Autowired
    //public void setxxxxRepository(xxxxRepository xxxRepository) {
        // this.xxxxRepository = xxxxxRepository;
    //}

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {

        // xxxx y = new Xxxxx();
        // y.setDescription("...");
        // productRepository.save(y);

        // log.info("Saved y: " + y.getId());
    }
}
