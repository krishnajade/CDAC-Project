package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.BloodStock;

@Transactional
@Repository
public interface BloodStockRepository extends JpaRepository<BloodStock, Integer> {
	
	@Query("select d from BloodStock d where bloodbank_id=?1")
	public List<BloodStock> getAllById(int id);
	
	@Modifying
	@Query("update BloodStock set quantity =?2 where bloodstock_id =?1")
	public int updateBloodStock(int id ,int qnt);

}
