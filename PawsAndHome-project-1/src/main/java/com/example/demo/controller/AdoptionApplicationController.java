package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modal.AdoptionApplication;
import com.example.demo.repository.AdoptionApplicationRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/adoptionDetails")
public class AdoptionApplicationController {

	@Autowired 
	private AdoptionApplicationRepository ar;
	
	@GetMapping("/fetchAll")
	public List<AdoptionApplication> fetchAll(){
		return ar.findAll();
	}
	
	@GetMapping("/fetchById/{id}")
	public AdoptionApplication fetchById(@PathVariable int id)
	{
		return ar.findById(id).orElse(null);
	}
	
	@GetMapping("/fetchByUserId/{userId}")
	public ResponseEntity<List<AdoptionApplication>> fetchByUserId(@PathVariable int userId) {
	    List<AdoptionApplication> applications = ar.findByUserId(userId);
	    if (applications.isEmpty()) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
	    }
	    return ResponseEntity.ok(applications);
	}

	
	@PostMapping("/insertApplication")
	public ResponseEntity<String> addApplication(@RequestBody AdoptionApplication newApplication)
	{
		try
		{
			ar.save(newApplication);
			return ResponseEntity.status(HttpStatus.CREATED).body("Application Submitted Successfully");
		}
		catch(Exception e)
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Application Submission Failed");
		}
	}
	
	@PutMapping("/updateStatus/{id}")
	public ResponseEntity<String> updateStatus(@PathVariable int id , @RequestParam("status") String newStatus)
	{
		AdoptionApplication ap = ar.findById(id).orElse(null);
		if(ap != null)
		{
			ap.setStatus(newStatus);
			ar.save(ap);
			return ResponseEntity.ok("Application Status Update Successfully");
		}
		else
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update application status");
		}
	}
	
	@DeleteMapping("/deleteById/{id}")
	public String removeApplicationById(@PathVariable int id)
	{
		AdoptionApplication ap = ar.findById(id).orElse(null);
		if(ap != null)
		{
			ar.deleteById(id);
			return "Adoption application deleted successfully";
		}
		else
		{
			return "Adoption application id not found";
		}
	}
	
	@DeleteMapping("/deleteAll")
	public String removeApplication()
	{
		ar.deleteAll();
		
		return "Adoption applications delted successfully";
	}
}
