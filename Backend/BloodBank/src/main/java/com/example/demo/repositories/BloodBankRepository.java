package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.BloodBank;

@Transactional
@Repository
public interface BloodBankRepository extends JpaRepository<BloodBank, Integer> {

	@Query("select b from BloodBank b where user_id =?1")
	public BloodBank findByUserId(int id);
	
	@Modifying
	@Query("delete BloodBank where user_id=?1")
	public void deleteByUserId(int id);
}
