package com.finalproject.ecommorce.dao;


import com.finalproject.ecommorce.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
