package com.finalproject.ecommorce.dao;

import com.finalproject.ecommorce.dto.PostDto;
import com.finalproject.ecommorce.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

}