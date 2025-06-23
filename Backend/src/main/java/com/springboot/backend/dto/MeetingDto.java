package com.springboot.backend.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
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
     @JsonFormat(pattern = "yyyy-MM-dd")
     LocalDate date,
     @NotBlank
     @JsonFormat(pattern = "HH:mm")
     LocalTime time,

     String priority,
     String participants
){}


