package com.finalproject.ecommorce.dao;

import com.finalproject.ecommorce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")//köken eşleme
public interface ProductRepository extends JpaRepository<Product, Long> {
}
