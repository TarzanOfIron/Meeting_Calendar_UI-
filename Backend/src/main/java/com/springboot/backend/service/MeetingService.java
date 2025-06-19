package com.springboot.backend.service;


import com.springboot.backend.dto.MeetingDto;

import java.util.Optional;

public interface MeetingService {

    Optional<MeetingDto> createMeeting(MeetingDto meetingDto);


}
