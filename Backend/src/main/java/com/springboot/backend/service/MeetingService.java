package com.springboot.backend.service;


import com.springboot.backend.dto.MeetingDto;

import java.util.List;

public interface MeetingService {

    MeetingDto createMeeting(MeetingDto meetingDto);

    List<MeetingDto> findAllMeetings();


}
