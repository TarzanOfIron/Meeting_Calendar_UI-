package com.springboot.backend.dto;


import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

import java.sql.Time;
import java.util.Date;

@Builder
public class MeetingDto {

    private long id;

    @NotBlank
    private Date date;
    @NotBlank
    private Time time;
    
    private String priority;
    private String participants;
}
