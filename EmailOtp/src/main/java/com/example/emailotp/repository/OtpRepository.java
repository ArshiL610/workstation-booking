package com.example.emailotp.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.emailotp.model.OtpEntity;

public interface OtpRepository extends JpaRepository<OtpEntity, Long>{

	OtpEntity findByOtp(String otp);
}
