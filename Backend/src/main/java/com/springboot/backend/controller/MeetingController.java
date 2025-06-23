package com.springboot.backend.controller;

import com.springboot.backend.dto.MeetingDto;
import com.springboot.backend.service.MeetingService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("api/meetings")
@Validated
public class MeetingController {

    private final MeetingService meetingService;

    @Autowired
    public MeetingController(MeetingService meetingService) {
        this.meetingService = meetingService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    MeetingDto createMeeting(@Valid @RequestParam String title,
                             @RequestParam LocalDate date,
                             @RequestParam @DateTimeFormat(pattern = "HH:mm") String time,
                             @RequestParam String priority,
                             @RequestParam String participants) {

        LocalTime parsedTime = LocalTime.parse(time, DateTimeFormatter.ofPattern("HH:mm"));

        return meetingService.createMeeting(MeetingDto.builder()
                .title(title)
                .date(date)
                .time(parsedTime)
                .priority(priority)
                .participants(participants)
                .build());
    }
}
