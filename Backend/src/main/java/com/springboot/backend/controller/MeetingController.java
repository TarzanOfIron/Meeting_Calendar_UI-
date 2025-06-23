package com.springboot.backend.controller;

import com.springboot.backend.dto.MeetingDto;
import com.springboot.backend.service.MeetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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
    MeetingDto createMeeting(@RequestBody MeetingDto meetingDto) {

        return meetingService.createMeeting(meetingDto);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    List<MeetingDto> findAllMeetings() {
        return meetingService.findAllMeetings();
    }
}
