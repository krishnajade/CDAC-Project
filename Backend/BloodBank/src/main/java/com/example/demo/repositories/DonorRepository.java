package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Donor;

@Transactional
@Repository
public interface DonorRepository extends JpaRepository<Donor, Integer> {

	@Query("select d from Donor d where user_id =?1")
	public Donor findByUserId(int id);
	
	@Modifying
	@Query("delete Donor where user_id=?1")
	public void deleteByUserId(int id);
}
