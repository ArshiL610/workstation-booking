package com.example.workstationBooking.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.example.workstationBooking.model.BookingDetails;
import com.example.workstationBooking.model.Room;
import com.example.workstationBooking.repository.BookingDetailsRepository;
import com.example.workstationBooking.repository.RoomRepository;


@Service
public class RoomService {
	
	private final RoomRepository roomRepository;
	private final BookingDetailsRepository bookingDetailsRepository;

	public RoomService(RoomRepository roomRepository, BookingDetailsRepository bookingDetailsRepository) {
		super();
		this.roomRepository = roomRepository;
		this.bookingDetailsRepository = bookingDetailsRepository;
	} 
	

	//to delete the previous bookings from the rooms table
//	@Scheduled(cron = "0 0 10 * * *") //executing this task at 10:00 AM everyday
//	public void deleteRoomsOlderThanCurrentDate() {
//		LocalDate currentDate = LocalDate.now();
//		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
//		LocalDate formattedDate = LocalDate.parse(currentDate.format(formatter), formatter);
//		
//		List<Room> roomsToDelete = roomRepository.findAll().stream()
//				.filter(room -> room.getFromDate().isBefore(formattedDate))
//				.collect(Collectors.toList());
//		
//		roomRepository.deleteAll(roomsToDelete);
//		
//	}
	
	// to delete rooms older than current date and current time
	@Scheduled(cron ="*/10 * * * * *")  //for every 10 seconds
	public void deleteRoomsOlderThanCurrentDateTime() {
		LocalDate currentDate = LocalDate.now();
		LocalTime currentTime = LocalTime.now();
		DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		LocalDate formattedDate = LocalDate.parse(currentDate.format(dateFormatter), dateFormatter);
		DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("h:mm a");
		LocalTime formattedTime = LocalTime.parse(currentTime.format(timeFormatter), timeFormatter);
		
		List<Room> roomsToDelete = roomRepository.findAll().stream()
				.filter(room -> {
					LocalDate bookingDate = room.getToDate();
					LocalTime bookingTime = room.getToTime();
					
					return bookingDate.isBefore(formattedDate) || (bookingDate.isEqual(formattedDate) && bookingTime.isBefore(formattedTime));

				})
				.collect(Collectors.toList());
		
		roomRepository.deleteAll(roomsToDelete);
	}
	
	
	//to delete the previous bookings from the bookingDetails table
	@Scheduled(cron = "*/10 * * * * *") //executing this task every 10 seconds
	public void deleteRoomDetailsOlderThanCurrentDateTime() {
		LocalDate currentDate = LocalDate.now();
		LocalTime currentTime = LocalTime.now();
		DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		LocalDate formattedDate = LocalDate.parse(currentDate.format(dateFormatter), dateFormatter);
		DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("h:mm a");
		LocalTime formattedTime = LocalTime.parse(currentTime.format(timeFormatter), timeFormatter);
		
		List<BookingDetails> roomsToDelete = bookingDetailsRepository.findAll().stream()
				.filter(room -> {
					LocalDate bookingDate = room.getToDate();
					LocalTime bookingTime = room.getToTime();
					
					return bookingDate.isBefore(formattedDate) || (bookingDate.isEqual(formattedDate) && bookingTime.isBefore(formattedTime));
				})
				.collect(Collectors.toList());
		
		bookingDetailsRepository.deleteAll(roomsToDelete);
	}

}
