package com.example.workstationBooking.request;


public class UpdatePasswordRequest {

	private String email;
	private String password;
	
	
	//constructors
	public UpdatePasswordRequest() {
		
	}
	public UpdatePasswordRequest(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
	//getters and setters
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
