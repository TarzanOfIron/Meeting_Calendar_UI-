package com.springboot.backend.service.impl;

import com.springboot.backend.dto.MeetingDto;
import com.springboot.backend.entity.Meeting;
import com.springboot.backend.repositories.MeetingRepository;
import com.springboot.backend.service.MeetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class MeetingImpl implements MeetingService {
    MeetingRepository meetingRepository;

    @Autowired
    public MeetingImpl(MeetingRepository meetingRepository) {
        this.meetingRepository = meetingRepository;
    }

    @Override
    public MeetingDto createMeeting(MeetingDto meetingDto) {
        return meetingToMeetingDto(meetingRepository.save(meetingDtoToMeeting(meetingDto)));
    }

    private static MeetingDto meetingToMeetingDto( Meeting savedMeeting) {
        return MeetingDto.builder()
                .id(savedMeeting.getId())
                .title(savedMeeting.getTitle())
                .date(savedMeeting.getDate())
                .time(savedMeeting.getTime())
                .priority(savedMeeting.getPriority())
                .participants(savedMeeting.getParticipants())
                .build();

    }

    private static Meeting meetingDtoToMeeting(MeetingDto meetingDto) {
        return Meeting.builder()
                .title(meetingDto.title())
                .date(meetingDto.date())
                .time(meetingDto.time())
                .priority(meetingDto.priority())
                .participants(meetingDto.participants())
                .build();
    }
}
