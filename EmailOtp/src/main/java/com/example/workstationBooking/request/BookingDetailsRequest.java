package com.example.workstationBooking.request;


import java.util.List;


public class BookingDetailsRequest {


	private List<String> recipients;
	
	private String purpose;
	private String fromDate;
	private String toDate;	
	private String fromTime;
	private String toTime;
	private boolean allDay;
	private String subLocation;
	private String repeatOption;
	private String meetingType;
	private String description;
	private String email;
	

	
	//constructors
	public BookingDetailsRequest() {
		super();
	}	
	

	public BookingDetailsRequest(List<String> recipients, String purpose, String fromDate, String toDate, String fromTime,
			String toTime, boolean allDay, String subLocation, String repeatOption, String meetingType, String description, String email) {
		super();
		this.recipients = recipients;
		this.purpose = purpose;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.fromTime = fromTime;
		this.toTime = toTime;
		this.allDay = allDay;
		this.subLocation = subLocation;
		this.repeatOption = repeatOption;
		this.meetingType = meetingType;
		this.description = description;
		this.email = email;
	}

	
	//getters and setters
	
	public String getFromDate() {
		return fromDate;
	}
	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}
	public String getToDate() {
		return toDate;
	}
	public void setToDate(String toDate) {
		this.toDate = toDate;
	}
	
	public String getPurpose() {
		return purpose;
	}
	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public String getFromTime() {
		return fromTime;
	}
	public void setFromTime(String fromTime) {
		this.fromTime = fromTime;
	}
	public String getToTime() {
		return toTime;
	}
	public void setToTime(String toTime) {
		this.toTime = toTime;
	}


	public String getSubLocation() {
		return subLocation;
	}

	public void setSubLocation(String subLocation) {
		this.subLocation = subLocation;
	}

	public String getRepeatOption() {
		return repeatOption;
	}

	public void setRepeatOption(String repeatOption) {
		this.repeatOption = repeatOption;
	}

	public String getMeetingType() {
		return meetingType;
	}

	public void setMeetingType(String meetingType) {
		this.meetingType = meetingType;
	}

	public boolean getAllDay() {
		return allDay;
	}

	public void setAllDay(boolean allDay) {
		this.allDay = allDay;
	}
	public List<String> getRecipients() {
		return recipients;
	}
	public void setRecipients(List<String> recipients) {
		this.recipients = recipients;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
}
