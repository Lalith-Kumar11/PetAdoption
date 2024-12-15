package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.modal.Pet;
import com.example.demo.repository.PetRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/petDetails")
public class PetController {
	
	@Autowired	
	private PetRepository pr;
	
	@GetMapping("/fetchAll")
	public List<Pet> fetchAll()
	{
		return pr.findAll();
	}
	
	@GetMapping("/fetchById/{id}")
	public Pet fetchById(@PathVariable int id)
	{
		return pr.findById(id).orElse(null);
	}
	
	@PostMapping("/insertPet")
	public ResponseEntity<String> addPet(@RequestParam("pet_name") String pet_name,
										 @RequestParam("species") String species,
										 @RequestParam("breed") String breed,
										 @RequestParam("age") int age,
										 @RequestParam("image") MultipartFile imageFile,
										 @RequestParam("gender") String gender,
										 @RequestParam("description") String description,
										 @RequestParam("status") String status,
										 @RequestParam("fee") double fee)
	{
		try 
		{
			Pet pet = new Pet();
			pet.setPet_name(pet_name);
			pet.setSpecies(species);
			pet.setBreed(breed);
			pet.setAge(age);
			if(imageFile != null && !imageFile.isEmpty())
			{
				pet.setImage(imageFile.getBytes());
			}
			pet.setGender(gender);
			pet.setDescription(description);
			pet.setStatus(status);
			pet.setFee(fee);
			
			pr.save(pet);
			
			return ResponseEntity.status(HttpStatus.CREATED).body("Pet added successfully");
			
		}
		catch(Exception e)
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add pet");
		}
	}
	
	@PutMapping("/updatePetImage/{id}")
	public ResponseEntity<byte[]> getImage(@PathVariable int id) 
	{
	    Pet pet = pr.findById(id).orElseThrow(() -> new RuntimeException("Pet not found"));
	    byte[] image = pet.getImage();
	    if (image == null) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // 404 Not Found
	    }
	    HttpHeaders headers = new HttpHeaders();
	    headers.add("Content-Type", "image/jpeg"); // or appropriate image type
	    return new ResponseEntity<>(image, headers, HttpStatus.OK); // 200 OK with headers and body
	}
	
	@PutMapping("/updatePet/{id}")
	public String updatePet(@PathVariable int id,
											@RequestParam("pet_name") String pet_name,
											@RequestParam("species") String species,
											@RequestParam("breed") String breed,
											@RequestParam("age") int age,
											@RequestParam("image") MultipartFile imageFile,
											@RequestParam("gender") String gender,
											@RequestParam("description") String description,
											@RequestParam("status") String status,
											@RequestParam("fee") double fee)
	{
		Pet pet = pr.findById(id).orElse(null);
		if(pet != null)
		{
			try 
			{
				pet.setPet_name(pet_name);
				pet.setSpecies(species);
				pet.setBreed(breed);
				pet.setAge(age);
				if(imageFile != null && !imageFile.isEmpty())
				{
					pet.setImage(imageFile.getBytes());
				}
				pet.setGender(gender);
				pet.setDescription(description);
				pet.setStatus(status);
				pet.setFee(fee);
				
				pr.save(pet);
				return "Pet updated successfully";
			}
			catch(Exception e)
			{
				return "Error occured while updating the details of the pet";
			}
		}
		else
		{
			return "Pet Id not found";
		}
	}

	
	@GetMapping("/fetchImage/{id}")
	public ResponseEntity<byte[]> fetchImage(@PathVariable int id)
	{
		Pet pet = pr.findById(id).orElseThrow(() -> new RuntimeException("Pet not found"));
        byte[] image = pet.getImage();
        if (image == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "image/jpeg"); // or appropriate image type
        return new ResponseEntity<>(image, headers, HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteById/{id}")
	public String removePet(@PathVariable int id)
	{
		Pet pet = pr.findById(id).orElse(null);
		if(pet != null) 
		{
			pr.deleteById(id);
			
			return ("Pet deleted successfully");
		}
		else
		{
			return ("Pet Id not found");
		}
	}
	
	@DeleteMapping("/deleteAll")
	public String removeAll() {
		pr.deleteAll();
		return ("All Pet Details are removed");
	}
	
}
