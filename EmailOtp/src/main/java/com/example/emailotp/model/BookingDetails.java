package com.example.emailotp.model;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "booking_details")
public class BookingDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "email", nullable=false)
	private String email;
	
	@JsonDeserialize(using = LocalDateDeserializer.class)
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	@Column(name = "from_date")
	private LocalDate fromDate;
	
	@JsonDeserialize(using = LocalDateDeserializer.class)
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	@Column(name = "to_date")
	private LocalDate toDate;
	
	@JsonDeserialize(using = LocalTimeDeserializer.class)
	@JsonFormat(pattern = "h:mm a")
	@Column(name = "from_time")
	private LocalTime  fromTime;
	
	@JsonDeserialize(using = LocalTimeDeserializer.class)
	@JsonFormat(pattern = "h:mm a")
	@Column(name = "to_time")
	private LocalTime  toTime;
	
	@Column(name = "purpose", nullable=false)
	private String purpose;
	
	@Column(name = "description", nullable=false)
	private String description;
	
	@Column(name = "location", nullable=false)
	private String location;
	
	@Column(name = "repeatOption", nullable=false)
	private String repeatOption;
	
	@Column(name = "meetingType", nullable=false)
	private String meetingType;

	
	
	//constructors
	public BookingDetails() {
		super();
	}

	public BookingDetails(String email, LocalDate fromDate, LocalDate toDate, LocalTime fromTime, LocalTime toTime,
			String purpose, String description, String location, String repeatOption, String meetingType) {
		super();
		this.email = email;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.fromTime = fromTime;
		this.toTime = toTime;
		this.purpose = purpose;
		this.description = description;
		this.location = location;
		this.repeatOption = repeatOption;
		this.meetingType = meetingType;
	}

	
	//getters and setters
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDate getFromDate() {
		return fromDate;
	}

	public void setFromDate(LocalDate fromDate) {
		this.fromDate = fromDate;
	}

	public LocalDate getToDate() {
		return toDate;
	}

	public void setToDate(LocalDate toDate) {
		this.toDate = toDate;
	}

	public LocalTime getFromTime() {
		return fromTime;
	}

	public void setFromTime(LocalTime fromTime) {
		this.fromTime = fromTime;
	}

	public LocalTime getToTime() {
		return toTime;
	}

	public void setToTime(LocalTime toTime) {
		this.toTime = toTime;
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

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
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
	
	
}
