package com.springboot.backend.repositories;

import com.springboot.backend.entity.Meeting;
import org.springframework.data.repository.CrudRepository;

public interface MeetingRepository extends CrudRepository<Meeting, Long> {

    
}
