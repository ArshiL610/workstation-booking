package com.example.workstationBooking.repository;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.workstationBooking.model.BookingDetails;

import jakarta.transaction.Transactional;

@Repository
public interface BookingDetailsRepository extends JpaRepository<BookingDetails, Long>{

	@Modifying
	@Transactional
	@Query("DELETE FROM Room r WHERE r.fromDate < :currentDate AND r.toDate < :currentDate")
	void deleteRoomDetailsOlderThanCurrentDate(LocalDate currentDate);
	
}
