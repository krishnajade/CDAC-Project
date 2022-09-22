package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="bloodstock")
public class BloodStock {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int bloodstock_id;
	@Column
	String bloodgroup;
	@Column
	String bloodcomponent;
	@Column
	int quantity;
	@Column
	String availability;
	@Column
	int bloodbank_id;
	/*@JsonIgnoreProperties("bloodstock")
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="bloodbank_id")
	BloodBank bloodbank;*/
	
	public int getBloodbank_id() {
		return bloodbank_id;
	}
	public void setBloodbank_id(int bloodbank_id) {
		this.bloodbank_id = bloodbank_id;
	}
	public BloodStock() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BloodStock(String bloodgroup, String bloodcomponent, int quantity, String availability) {
		super();
		this.bloodgroup = bloodgroup;
		this.bloodcomponent = bloodcomponent;
		this.quantity = quantity;
		this.availability = availability;
	}
	
	public int getBloodstock_id() {
		return bloodstock_id;
	}
	public void setBloodstock_id(int bloodstock_id) {
		this.bloodstock_id = bloodstock_id;
	}
	public String getBloodgroup() {
		return bloodgroup;
	}
	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}
	public String getBloodcomponent() {
		return bloodcomponent;
	}
	public void setBloodcomponent(String bloodcomponent) {
		this.bloodcomponent = bloodcomponent;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getAvailability() {
		return availability;
	}
	public void setAvailability(String availability) {
		this.availability = availability;
	}
	/*public BloodBank getBloodbank() {
		return bloodbank;
	}
	public void setBloodbank(BloodBank bloodbank) {
		this.bloodbank = bloodbank;}*/
}
