package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modal.Payment;
import com.example.demo.repository.PaymentRepository;

@RestController
@RequestMapping("/paymentDetails")
public class PaymentController {
	
	@Autowired
	private PaymentRepository pr;
	
	@GetMapping("/fetchAll")
	public List<Payment> fetchAll()
	{
		return pr.findAll();
	}
	
	@GetMapping("fetchById/{id}")
	public Payment fetchById(@PathVariable int id)
	{
		return pr.findById(id).orElse(null);		
	}
	
	@PostMapping("/insertPayment")
	public Payment addPayment(@RequestBody Payment pay)
	{
		return pr.save(pay);
	}
	
	@DeleteMapping("/deleteById/{id}")
	public String removePayment(@PathVariable int id)
	{
		Payment pay = pr.findById(id).orElse(null);
		if(pay != null)
		{
			pr.delete(pay);
			return ("Payment Details Deleted Successfully");
		}
		else
		{
			return ("Payment Id Not Found");
		}
	}
	
	@DeleteMapping("/deleteAll")
	public String removeAll()
	{
		pr.deleteAll();
		return "Payment Details Deleted Successfully";
	}
}
