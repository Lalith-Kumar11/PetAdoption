package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modal.PetPickup;
import com.example.demo.repository.PetPickupRepository;

@RestController
@RequestMapping("/requestDetails")
public class PetPickupController {
	
	@Autowired
	private PetPickupRepository pr;
	
	@GetMapping("/fetchAll")
	public List<PetPickup> fetchAll(){
		return pr.findAll();
	}
	
	@GetMapping("/fetchById/{id}")
	public PetPickup fetchById(@PathVariable int id){
		return pr.findById(id).orElse(null);
	}
	
	@PostMapping("/insertRequest")
	public ResponseEntity<String> addRequest(@RequestBody PetPickup request)
	{
		try 
		{
			pr.save(request);			
			return ResponseEntity.ok("Request Submitted Successfully");
		}
		catch (Exception e) 
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Request Submission Failed");
		}
	}
	
	@PutMapping("/updateStatus/{id}")
	public String updateStatus(@PathVariable int id , @RequestParam String status)
	{
		PetPickup pkup = pr.findById(id).orElse(null);
		if(pkup != null)
		{
			pkup.setStatus(status);
			pr.save(pkup);
			return "Request Status Updated Successfully";
		}
		else
		{
			return "Request Id Not Found";
		}
	}
	
	@DeleteMapping("/deleteById/{id}")
	public String deleteById(@PathVariable int id)
	{
		PetPickup pkup = pr.findById(id).orElse(null);
		if(pkup != null) 
		{
			pr.deleteById(id);
			return "Pet Pickup Request Deleted Successfully";
		}
		else
		{
			return "Pet Pickup Request Id Not Found";
		}
	}
	
	@DeleteMapping("/deleteAll")
	public String deleteAll()
	{
		pr.deleteAll();
		return "Request Application Details Deleted";
	}

}
