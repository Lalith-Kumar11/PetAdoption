package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modal.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,Integer>{

}
