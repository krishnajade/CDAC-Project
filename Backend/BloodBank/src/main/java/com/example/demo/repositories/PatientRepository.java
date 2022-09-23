package com.example.demo.repositories;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Patient;
@Transactional
@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
	
	@Query("select c from Patient c where hospital_id=?1")
	public List<Patient> getpatientbyid(int Patient);
	
	@Query("select c from Patient c where patient_id=?1")
	public List<Patient> getpatientbyPatientid(int Patient);
		
}
