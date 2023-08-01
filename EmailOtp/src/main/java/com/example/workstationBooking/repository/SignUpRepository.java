package com.example.workstationBooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.workstationBooking.model.Registration;

@Repository
public interface SignUpRepository extends JpaRepository<Registration, Long> {

	Registration findByEmail(String email);
	Registration findByEmailAndPassword(String email, String password);
}
