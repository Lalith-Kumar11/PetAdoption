package com.example.demo.modal;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Random;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="payment")
public class Payment {
	
	@Id
	@GeneratedValue
	private int payment_id;
	
	
	@OneToOne
	@JoinColumn(name="application_id" , referencedColumnName="application_id")
	private AdoptionApplication adoptionApplication;
	
	private double amount ;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false, updatable = false)
	@CreationTimestamp
	private  Date payment_date;
	
	
	@Column(unique = true, nullable = false)
    private String transaction_id;
	
	// Method to generate the transaction ID
    private String generateTransactionId() {
        String prefix = "TXN";
        String date = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        String randomDigits = String.format("%04d", new Random().nextInt(10000));
        return prefix + "-" + date + "-" + randomDigits;
    }

    @PrePersist
    public void prePersist() {
        this.transaction_id = generateTransactionId();
    }
    
    private String status="Success";

	public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}

	public AdoptionApplication getAdoptionApplication() {
		return adoptionApplication;
	}

	public void setAdoptionApplication(AdoptionApplication adoptionApplication) {
		this.adoptionApplication = adoptionApplication;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public Date getPayment_date() {
		return payment_date;
	}

	public void setPayment_date(Date payment_date) {
		this.payment_date = payment_date;
	}

	public String getTransaction_id() {
		return transaction_id;
	}

	public void setTransaction_id(String transaction_id) {
		this.transaction_id = transaction_id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
    
}
