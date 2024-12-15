package com.example.demo.modal;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="adoption_application")
public class AdoptionApplication {
	@Id
	@GeneratedValue
	private int application_id;
	
	@ManyToOne
	@JoinColumn(name="id" , referencedColumnName="id")
	private User user;
	
@ManyToOne
@JoinColumn(name="pet_id", referencedColumnName="pet_id")
private Pet pet;
	
//	private int pet_id;
	
	@Column(length = 1000)
    private String comments;

	@Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private Date applicationDate;

    @Column(nullable = false)
    private String status = "Pending";

	public int getApplication_id() {
		return application_id;
	}

	public void setApplication_id(int application_id) {
		this.application_id = application_id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Pet getPet() {
		return pet;
	}

	public void setPet(Pet pet) {
		this.pet = pet;
	}
	
	

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public Date getApplicationDate() {
		return applicationDate;
	}

	public void setApplicationDate(Date applicationDate) {
		this.applicationDate = applicationDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

//	public int getPet_id() {
//		return pet_id;
//	}
//
//	public void setPet_id(int pet_id) {
//		this.pet_id = pet_id;
//	}
    
    
}
