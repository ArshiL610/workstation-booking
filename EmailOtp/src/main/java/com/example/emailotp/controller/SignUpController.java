package com.example.emailotp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.emailotp.encrypt.SHA256PasswordEncoder;
import com.example.emailotp.model.Registration;
import com.example.emailotp.repository.SignUpRepository;


@RestController
@RequestMapping("/api/user_registration")
@CrossOrigin(origins = "*")
public class SignUpController {

	private final SignUpRepository signUpRepository;
	
	
	@Autowired
	public SignUpController(SignUpRepository signUpRepository) {
		this.signUpRepository = signUpRepository;
	}
	
	@GetMapping
	public ResponseEntity<List<Registration>> getAllRegistrations(){
		List<Registration> registrations = signUpRepository.findAll();
		return ResponseEntity.ok(registrations);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Registration> getUserById(@PathVariable Long id){
		Registration registration = signUpRepository.findById(id).orElse(null);
		if (registration != null) {
			return ResponseEntity.ok(registration);
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	//saving signup details in database
	@PostMapping("/signup")
	public ResponseEntity<String> registerUser(@RequestBody Registration registration){
		if (signUpRepository.findByEmail(registration.getEmail()) != null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email Address Exists");
		}
		
		String hashedPassword = SHA256PasswordEncoder.encryptPassword(registration.getPassword());
		registration.setPassword(hashedPassword);
		
		 //save to db
		signUpRepository.save(registration);
		return ResponseEntity.ok("User Registered Successfully");
	}
	
	
	
}
