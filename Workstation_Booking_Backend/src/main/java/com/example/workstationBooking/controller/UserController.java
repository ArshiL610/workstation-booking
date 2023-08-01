package com.example.workstationBooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.workstationBooking.model.User;
import com.example.workstationBooking.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

	private final UserRepository userRepository;

	@Autowired
	public UserController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	
	@GetMapping("/get")
	public ResponseEntity<List<User>> getAllUsers(){
		List<User> users = userRepository.findAll();
		return ResponseEntity.ok(users);
	}
	
	//get mapping with name as parameter
	@GetMapping("/get/{name}")
	public ResponseEntity<User> getUserByName(@PathVariable String name){
		User user = userRepository.findByName(name);
		if(user != null) {
			return ResponseEntity.ok(user);
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id){
		User user = userRepository.findById(id).orElse(null);
		if (user != null) {
			return ResponseEntity.ok(user);
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	//saving login details in database
	@PostMapping("/saveDetails")
	public ResponseEntity<String> registerUser(@RequestBody User user) {
		if (userRepository.findByEmail(user.getEmail()) != null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Employee exists");
		}
		
		//save user to db
		userRepository.save(user);
		return ResponseEntity.ok("User Added to Org. Successfully");
	}
	
	//updating password
//	@PutMapping("/update-password")
//	public ResponseEntity<String> updatePassword(@RequestBody UpdatePasswordRequest request ){
//		User user = userRepository.findByEmail(request.getEmail());
//		if (user == null) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
//		}
//		
//		user.setName(request.getPassword());
//		userRepository.save(user);
//		
//		return ResponseEntity.ok("Password updated successfully");
//	}
	
	
}
