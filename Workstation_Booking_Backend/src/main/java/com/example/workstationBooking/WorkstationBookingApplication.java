package com.example.workstationBooking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling           //the RoomService class is called with the @Schedule annotation
public class WorkstationBookingApplication {

	public static void main(String[] args) {
		SpringApplication.run(WorkstationBookingApplication.class, args);
	}

}
