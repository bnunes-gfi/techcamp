package com.tme.techcamp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.IdClass;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class TmeTcSetupNmscPriority {
    @Id @GeneratedValue
    private long pk;
    private String nmscprioWaveBk;
    private Double nmscprioNmsc;
    private String nmscprioPartNumber;
    private String nmscprioPriorityBk;
    private String nmscprioExcelFileName;
}
