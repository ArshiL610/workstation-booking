package com.example.emailotp.repository;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.emailotp.model.Room;

import jakarta.transaction.Transactional;


@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {

	@Modifying
	@Transactional
	@Query("DELETE FROM Room r WHERE (r.toDate < :currentDate) OR (r.toDate = :currentDate AND r.toTime < :currentTime)")
	void deleteRoomsOlderThanCurrentDateTime(LocalDate currentDate, LocalTime currentTime);
	
	@Modifying
	@Transactional
	@Query("DELETE FROM Room r WHERE (r.toDate < :currentDate) OR (r.toDate = :currentDate AND r.toTime < :currentTime)")
	void deleteRoomDetailsOlderThanCurrentDateTime(LocalDate currentDate, LocalTime currentTime);
	
	
}
