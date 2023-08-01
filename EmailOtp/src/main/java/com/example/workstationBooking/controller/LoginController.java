package com.example.workstationBooking.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.workstationBooking.encrypt.SHA256PasswordEncoder;
import com.example.workstationBooking.model.Registration;
import com.example.workstationBooking.repository.SignUpRepository;
import com.example.workstationBooking.request.UpdatePasswordRequest;




@RestController
@RequestMapping("/api/user_registration")
@CrossOrigin(origins = "*")
public class LoginController {

	
	private final SignUpRepository signUpRepository;
	
	@Autowired
	public LoginController(SignUpRepository signUpRepository) {
		super();
		this.signUpRepository = signUpRepository;

	}
	
	
	@PostMapping("/login")
	public ResponseEntity<Map<String, String>> login(@RequestBody Registration credentials){
		Registration user = signUpRepository.findByEmail(credentials.getEmail());
		
		if(user!= null) {
			String hashedPassword = SHA256PasswordEncoder.encryptPassword(credentials.getPassword());
			
			if(user.getPassword().equals(hashedPassword)) 
			{
				Map<String, String> response = new HashMap<>();
				response.put("message", "Login Successful");
				response.put("name",user.getName());
			
				return ResponseEntity.ok(response);
			}
			else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap("message", "Invalid email or password"));
            }
		}
		else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap("message", "Invalid email or password"));
		}
	}
	
	//updating password
	@PutMapping("/update-password")
	public ResponseEntity<String> updatePassword(@RequestBody UpdatePasswordRequest request){
		Registration reg = signUpRepository.findByEmail(request.getEmail());
		if ( reg == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
		}
		//encryption
		String hashedPassword = SHA256PasswordEncoder.encryptPassword(request.getPassword());
		reg.setPassword(hashedPassword);
		signUpRepository.save(reg);
		
		return ResponseEntity.ok("Password updated successfully");
	}
	
	
}
