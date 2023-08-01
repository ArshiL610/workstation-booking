package com.example.emailotp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


import com.example.emailotp.request.BookingDetailsRequest;


@Service
public class EmailService {

	private final JavaMailSender mailSender;
	

	@Autowired
	public EmailService(JavaMailSender mailSender) {
		super();
		this.mailSender = mailSender;
	}
	
	//to send otp
	public void sendOtpEmail(String recipientEmail, String otp) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(recipientEmail);
		message.setSubject("OTP Verification");
		message.setText("Your OTP is : " + otp);
		
		mailSender.send(message);
	}
	
	//send booking details via mail to the user
	public void sendBookingDetails(List<String> recipientEmails ,BookingDetailsRequest bookingDetails) {
		
		String timeInfo = bookingDetails.getAllDay() ? "All Day" : 
						(bookingDetails.getFromTime() + " - " + bookingDetails.getToTime());
		
		if (bookingDetails.getAllDay()) {
	        timeInfo = "All Day";
	    }
		
		SimpleMailMessage msg = new SimpleMailMessage();

		msg.setSubject("Booking Details");
		msg.setText("Booking Details:\n\n\n" +
				"Purpose : " + bookingDetails.getPurpose() + "\n" +
				"From Date : " + bookingDetails.getFromDate() + "\n" +
				"To Date : " + bookingDetails.getToDate() + "\n" +
				"Time : " + timeInfo + "\n" +
				"Location Booked : " + bookingDetails.getSubLocation() + "\n" +
				"Repeat : " + bookingDetails.getRepeatOption() + "\n" +
				"Meeting Mode : " + bookingDetails.getMeetingType() + "\n" +
				"Description : " + bookingDetails.getDescription() + "\n" +
				"\n\n\n\n\n\n\n\n" + "Thank you for booking!" + "\n" + "For any queries, feel free to contact! \nWe are here to help!");
		

		for (String recipientEmail : recipientEmails) {
	        SimpleMailMessage message = new SimpleMailMessage(msg);
	        message.setTo(recipientEmail);
	        mailSender.send(message);
	    }
	}
	
}
