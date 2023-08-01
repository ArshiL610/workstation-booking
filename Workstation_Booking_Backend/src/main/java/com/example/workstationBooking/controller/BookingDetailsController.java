package com.example.workstationBooking.controller;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.workstationBooking.exception.ResourceNotFoundException;
import com.example.workstationBooking.model.BookingDetails;
import com.example.workstationBooking.repository.BookingDetailsRepository;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/bookingdetails")
public class BookingDetailsController {
	
	@Autowired
	private BookingDetailsRepository bookingDetailsRepository;
	
	
	//get all bookings
	@GetMapping("/get")
	public List<BookingDetails> getAllDetails(){
		return bookingDetailsRepository.findAll();	
	}
	
	//add a booking
	@PostMapping("/post")
	public BookingDetails createBooking(@RequestBody BookingDetails bookingDetails) {
		String email = bookingDetails.getEmail();
		LocalDate fromDate = bookingDetails.getFromDate();
		LocalDate toDate = bookingDetails.getToDate();
		LocalTime fromTime = bookingDetails.getFromTime();
		LocalTime toTime = bookingDetails.getToTime();
		String purpose = bookingDetails.getPurpose();
		String description = bookingDetails.getDescription();
		String location = bookingDetails.getLocation();
		String repeatOption = bookingDetails.getRepeatOption();
		String meetingType = bookingDetails.getMeetingType();
		
		bookingDetails.setEmail(email);
		bookingDetails.setFromDate(fromDate);
		bookingDetails.setFromTime(fromTime);
		bookingDetails.setToDate(toDate);
		bookingDetails.setToTime(toTime);
		bookingDetails.setPurpose(purpose);
		bookingDetails.setDescription(description);
		bookingDetails.setLocation(location);
		bookingDetails.setRepeatOption(repeatOption);
		bookingDetails.setMeetingType(meetingType);
		
		return bookingDetailsRepository.save(bookingDetails);
	}
	
	//delete a booking
	@DeleteMapping("delete/{id}")
	public ResponseEntity<?> deleteBooking(@PathVariable Long id){
		BookingDetails bookingDetails = bookingDetailsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Booking not found"));
		
		bookingDetailsRepository.delete(bookingDetails);
		
		return ResponseEntity.ok().build();
	}

}
