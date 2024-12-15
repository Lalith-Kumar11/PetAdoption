package com.example.demo.modal;

import java.util.Date;
//import java.util.Set;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
//import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="pet_pickup_request_application")
public class PetPickup {
	
	@Id
	@GeneratedValue
	private int request_id;
	
	private String pet_type;
	
	@Column(name="pet_condition")
//	@Convert(converter = PetConditionConverter.class)
	private String pet_condition;
	
	@Column(length=1000)
	private String location;
	
	@Column(length=1000)
	private String description;
	
	
	@ManyToOne
	@JoinColumn(name="id" , referencedColumnName="id")
	private User user;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false , updatable = false)
	@CreationTimestamp
	private Date request_date;
	
	private String status ="Pending";

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getRequest_id() {
		return request_id;
	}

	public void setRequest_id(int request_id) {
		this.request_id = request_id;
	}

	public String getPet_type() {
		return pet_type;
	}

	public void setPet_type(String pet_type) {
		this.pet_type = pet_type;
	}

	public String getPet_condition() {
		return pet_condition;
	}

	public void setPet_condition(String pet_condition) {
		this.pet_condition = pet_condition;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Date getRequest_date() {
		return request_date;
	}

	public void setRequest_date(Date request_date) {
		this.request_date = request_date;
	}
	
}
