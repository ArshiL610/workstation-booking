package com.example.workstationBooking.controller;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.workstationBooking.exception.ResourceNotFoundException;
import com.example.workstationBooking.model.Room;
import com.example.workstationBooking.repository.RoomRepository;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/rooms")
public class RoomController {
	
	@Autowired
	private RoomRepository roomRepository;
	

	//get all the rooms
	@GetMapping("/get")
	public List<Room> getAllRooms(){
		return roomRepository.findAll();
	}
	
	//add a room
	@PostMapping("/post")
	public Room createRoom(@RequestBody Room room) {
		String roomname = room.getRoomname();
		String email = room.getEmail();
		LocalDate fromDate = room.getFromDate();
		LocalDate toDate = room.getToDate();
		LocalTime fromTime = room.getFromTime();
		LocalTime toTime = room.getToTime();
		
	    room.setRoomname(roomname);
	    room.setEmail(email);
	    room.setFromDate(fromDate);
	    room.setToDate(toDate);
	    room.setFromTime(fromTime);
	    room.setToTime(toTime);
	    
	    return roomRepository.save(room);
	}
	
	//delete and refresh the table contents
//	@PostMapping("/deleteOldRooms")
//	public ResponseEntity<String> deleteOldRooms(){
//		try {
//			roomService.deleteRoomsOlderThanCurrentDateTime();
//			return ResponseEntity.ok("Old rooms have been deleted successfully.");
//		}
//		catch(Exception e){
//			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete old rooms.");
//		}
//	}
	
	//update a room
	@PutMapping("/{id}")
    public Room updateRoom(@PathVariable Long id, @RequestBody Room updatedRoom) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found"));

        room.setRoomname(updatedRoom.getRoomname());
        room.setEmail(updatedRoom.getEmail());
        room.setFromDate(updatedRoom.getFromDate());
        room.setToDate(updatedRoom.getToDate());
        room.setFromTime(updatedRoom.getFromTime());
        room.setToTime(updatedRoom.getToTime());
        

        return roomRepository.save(room);
    }
	
	// to delete a room
	@DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRoom(@PathVariable Long id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found"));

        roomRepository.delete(room);

        return ResponseEntity.ok().build();
    }
	

}
