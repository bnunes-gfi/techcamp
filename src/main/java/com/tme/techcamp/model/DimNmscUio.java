package com.tme.techcamp.model;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class DimNmscUio{
    @Id
    @GeneratedValue
    private long pk;
    private String nmscuioNmsc3_Bk;
    private String nmscuioNmsc5_Bk;
    private Double nmscuioUioQty;
    private String nmscuioExcelFileNameCd;
    private String nmscuioPnBk;
    private String nmscuioPnCd;
}

