package com.example.emailotp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
//import jakarta.persistence.Transient;
import java.time.LocalDate;
import java.time.LocalTime;
import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.UniqueConstraint;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@Entity
@Table(name = "rooms", uniqueConstraints = @UniqueConstraint(columnNames = {"from_date", "to_date", "room_name", "from_time", "to_time"}))
public class Room {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "email")
	private String email;
	
	@Column(name = "room_name")
	private String roomname;
	

	
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

	
	//constructors
	public Room() {
		super();
	}

	public Room(String roomname,String email, LocalDate fromDate, LocalDate toDate, LocalTime fromTime, LocalTime toTime) {
		super();
		this.roomname = roomname;
		this.email = email;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.fromTime = fromTime;
		this.toTime = toTime;
	}

	//getters and setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRoomname() {
		return roomname;
	}

	public void setRoomname(String roomname) {
		this.roomname = roomname;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


	

}
