package com.example.demo.controller;

import com.example.demo.modal.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;
    
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping("/fetchAll")
	public List<User> fetchAll()
	{
		return userRepository.findAll();
	}
	
	@GetMapping("/fetchById/{id}")
	public User fetchById(@PathVariable Long id)
	{
		return userRepository.findById(id).orElse(null);
	}

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
    	User checkUser = userService.findByEmail(user.getEmail());
    	if(checkUser == null) {
    		return userService.saveUser(user);
    	}
    	else {
    		return null;
    	}
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        User existingUser = userService.findByEmail(user.getEmail());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return existingUser;
        }
        return null;
    }
   
    @PutMapping("/update/{id}")
    public User updateUser(@RequestBody User newDetail,@PathVariable Long id) {
    	
    	User oldDetail = userRepository.findById(id).orElse(null);

    	if(oldDetail != null)
		{
			oldDetail.setUsername(newDetail.getUsername());
			oldDetail.setEmail(newDetail.getEmail());
			oldDetail.setMobile(newDetail.getMobile());
			oldDetail.setPassword(newDetail.getPassword());
			oldDetail.setAddress(newDetail.getAddress());
			
			userRepository.save(oldDetail);
		}
		
    	return oldDetail;

    }
    
    @DeleteMapping("/deleteUser/{id}")
	public String removeUser(@PathVariable Long id) {
		User user = userRepository.findById(id).orElse(null);
		
		if(user != null)
		{
			userRepository.deleteById(id);
			return "User deleted successfully";
		}
		else
		{
			return "User Id not found";
		}
	}
    
    
}
