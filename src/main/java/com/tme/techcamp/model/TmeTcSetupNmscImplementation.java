package com.tme.techcamp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.IdClass;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class TmeTcSetupNmscImplementation {

    @Id @GeneratedValue
    private long pk;
    private String implWaveBk;
    private String implNmsc;
    private String implPartNumber;
    private Double implImplementationRatio;
    private String implExcelFileName;

    // Getter and setter methods from Lombox
}

