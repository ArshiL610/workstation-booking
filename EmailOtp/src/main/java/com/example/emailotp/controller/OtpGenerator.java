package com.example.emailotp.controller;

import java.util.Random;

public class OtpGenerator {

	public static String generateOtp() {
		//6 digit otp
		Random random = new Random();
		int otp = 100000 + random.nextInt(900000);
		
		return String.valueOf(otp);
	}
}
