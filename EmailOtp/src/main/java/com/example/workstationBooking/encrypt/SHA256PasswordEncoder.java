package com.example.workstationBooking.encrypt;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class SHA256PasswordEncoder {
	
	public static String encryptPassword(String password) {
		try {
			MessageDigest md = MessageDigest.getInstance("SHA-256");
			byte[] hash = md.digest(password.getBytes(StandardCharsets.UTF_8));
			StringBuilder sb = new StringBuilder();
			for(byte b : hash) {
				sb.append(String.format("%02x",b));
			}
			return sb.toString();
		}
		catch(NoSuchAlgorithmException e ) {
			e.printStackTrace();
			throw new RuntimeException("Error encrypting password");
		}
	}

}
