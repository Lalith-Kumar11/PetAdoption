package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.modal.AdoptionApplication;

public interface AdoptionApplicationRepository extends JpaRepository<AdoptionApplication, Integer> {

    @Query("SELECT a FROM AdoptionApplication a WHERE a.user.id = :userId")
    List<AdoptionApplication> findByUserId(@Param("userId") int userId);
}
