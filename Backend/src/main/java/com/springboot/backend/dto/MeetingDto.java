package com.springboot.backend.dto;


import jakarta.validation.constraints.NotBlank;
import lombok.Builder;


import java.time.LocalDate;
import java.time.LocalTime;


@Builder
public record MeetingDto (

     long id,

     @NotBlank
     String title,
     @NotBlank
     LocalDate date,
     @NotBlank
     LocalTime time,

     String priority,
     String participants
){}


