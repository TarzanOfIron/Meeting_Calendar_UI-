package com.springboot.backend.repositories;

import com.springboot.backend.entity.Meeting;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDate;
import java.util.List;

public interface MeetingRepository extends CrudRepository<Meeting, Long> {

    List<Meeting> findByExpiresAtAfter(LocalDate expires);

}
