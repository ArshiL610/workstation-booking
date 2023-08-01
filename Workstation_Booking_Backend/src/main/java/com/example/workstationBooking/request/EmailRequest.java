package com.example.workstationBooking.request;

public class EmailRequest {

	private String email;

	//default constructor
	public EmailRequest() {
		super();
	}

	//constructor using fields
	public EmailRequest(String email) {
		super();
		this.email = email;
	}

	//getter and setter for email
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
}
