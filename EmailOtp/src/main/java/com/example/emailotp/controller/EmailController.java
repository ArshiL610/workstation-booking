package com.example.emailotp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.emailotp.model.OtpEntity;
import com.example.emailotp.repository.OtpRepository;
import com.example.emailotp.request.BookingDetailsRequest;
import com.example.emailotp.request.EmailRequest;
import com.example.emailotp.service.EmailService;



@RestController
@CrossOrigin(origins = "*")
public class EmailController {

	private final EmailService emailService;

	@Autowired
	public EmailController(EmailService emailService) {
		super();
		this.emailService = emailService;
	}
	
	@Autowired
	private OtpRepository otpRepository;
	
	@PostMapping("/send-otp")
	public void sendOtpEmail(@RequestBody EmailRequest emailRequest) {
		String recipientEmail = emailRequest.getEmail();
		String otp = OtpGenerator.generateOtp(); 	//otp generation logic
		
		saveOtpInDatabase(recipientEmail, otp);
		emailService.sendOtpEmail(recipientEmail, otp);
	}
	
	@PostMapping("/verify-otp")
	public ResponseEntity<String> verifyOtp(@RequestParam("otp") String otp) {
		OtpEntity otpEntity = otpRepository.findByOtp(otp);
		if(otpEntity != null && otpEntity.getOtp().equals(otp)) {
			//valid
			return ResponseEntity.ok("Otp verified successfully");
		}
		else {
			//not valid
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid OTP.");
		}
	}

	//resend email
	@PostMapping("/resend-otp")
	public void resendOtpEmail(@RequestBody EmailRequest emailRequest) {
		String recipientEmail = emailRequest.getEmail();
		String otp = OtpGenerator.generateOtp(); 	//otp generation logic
		
		saveOtpInDatabase(recipientEmail, otp);
		emailService.sendOtpEmail(recipientEmail, otp);
	}
	
	//saving otp in database
	private void saveOtpInDatabase(String email, String otp) {
		OtpEntity otpEntity = otpRepository.findByOtp(otp);
		if (otpEntity != null) {
			otpEntity.setOtp(otp);
		}
		else {
			otpEntity = new OtpEntity(email, otp);
		}
		otpRepository.save(otpEntity);
	}
	
	
	@PostMapping("/sendmail")
	public void sendEmail(@RequestBody BookingDetailsRequest bookingDetailsRequest) {
		List<String> recipientEmails = bookingDetailsRequest.getRecipients();
		emailService.sendBookingDetails(recipientEmails, bookingDetailsRequest);
	}
	
}
