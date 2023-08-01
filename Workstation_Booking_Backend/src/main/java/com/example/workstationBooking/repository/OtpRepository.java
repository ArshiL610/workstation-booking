package com.example.workstationBooking.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.workstationBooking.model.OtpEntity;

public interface OtpRepository extends JpaRepository<OtpEntity, Long>{

	OtpEntity findByOtp(String otp);
}
