package com.finalproject.ecommorce.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class PostDto {
    private Long id;
    private String content;
    private String title;
    private String author;
    private String imageUrl;
    private Date dateCreated;
    private Date lastUpdated;

}
