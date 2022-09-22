package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.BloodBank;
import com.example.demo.entities.Hospital;

@Transactional
@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Integer> {

	@Query("select h from Hospital h where user_id=?1")
	public Hospital findByUserId(int id);
}
