package com.tme.techcamp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.IdClass;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class FacCampaignUio {

    @Id @GeneratedValue
    private long pk;
    private String campuioNmsc3_Bk;
    private String campuioNmsc5_Bk;
    private String campuioNameCountryCd;
    private String campuioPnBk;
    private String campuioPnCd;
    private String campuioWaveBk;
    private String campuioExcelFileNameCd;
    private Double campuioVinQty;
    private Double campuioSystemUioQty;
    private Double campuioUioPct;
    private Double campuioNmscuioQty;
    private String campuioRuleBk;
    private String campuioDescriptionCd;
    private String campuioValidationCd;
    private Double campuioFinalDecisionQty;
    private String campuioBk;
    private Integer campuioValidatedCd;

    // Getter and setter methods from Lombox
}


