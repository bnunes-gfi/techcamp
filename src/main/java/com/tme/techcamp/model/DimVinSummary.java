package com.tme.techcamp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class DimVinSummary {

    @Id @GeneratedValue
    private long pk;
    private String vinsumNmsc3_Bk;
    private String vinsumNmsc5_Bk;
    private String vinsumNameCountryCd;
    private String vinsumPnBk;
    private String vinsumPnCd;
    private Double vinsumVinQty;
    private Double vinsumYearBk;
    private String vinsumWaveBk;
    private String vinsumExcelFileNameCd;

    // Getter and setter methods from Lombox
}


