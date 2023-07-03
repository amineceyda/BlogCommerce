package com.finalproject.ecommorce.service;

import com.finalproject.ecommorce.dao.PostRepository;
import com.finalproject.ecommorce.dto.PostDto;
import com.finalproject.ecommorce.entity.Post;
import com.finalproject.ecommorce.exception.PostNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import static java.util.stream.Collectors.toList;

@Service
public class PostService {

    private PostRepository postRepository;

    @Transactional
    public void createPost(PostDto postDto) {
        Post post = mapFromDtoToPost(postDto);
        postRepository.save(post);//it didn't work directly so ı use mapping method
    }

    @Transactional
    public List<PostDto> showAllPosts() {
        List<Post> posts = postRepository.findAll();
        return posts.stream().map(this::mapFromPostToDto).collect(toList());
    }
    @Transactional
    public PostDto readSinglePost(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new PostNotFoundException("For id " + id));
        return mapFromPostToDto(post);
    }

    private PostDto mapFromPostToDto(Post post) {
        PostDto postDto = new PostDto();
        postDto.setId(post.getId());
        postDto.setImageUrl(post.getImageUrl());
        postDto.setTitle(post.getTitle());
        postDto.setContent(post.getContent());
        postDto.setAuthor(post.getAuthor());
        return postDto;
    }

    private Post mapFromDtoToPost(PostDto postDto) {
        Post post = new Post();
        post.setId(postDto.getId());
        post.setImageUrl(postDto.getImageUrl());
        post.setTitle(postDto.getTitle());
        post.setContent(postDto.getContent());
        post.setAuthor(postDto.getAuthor());//take this database later
        post.setDateCreated(Date.from(Instant.now()));

        return post;
    }




}


