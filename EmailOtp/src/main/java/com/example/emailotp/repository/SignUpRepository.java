package com.example.emailotp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.emailotp.model.Registration;

@Repository
public interface SignUpRepository extends JpaRepository<Registration, Long> {

	Registration findByEmail(String email);
	Registration findByEmailAndPassword(String email, String password);
}
