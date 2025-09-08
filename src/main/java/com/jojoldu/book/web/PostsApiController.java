package com.jojoldu.book.web;

import com.jojoldu.book.service.PostsService;
import com.jojoldu.book.web.dto.PostsSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.jojoldu.book.web.dto.PostsResponseDto;
import com.jojoldu.book.web.dto.PostsUpdateRequestDto;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class PostsApiController {

    private final PostsService postsService;

    // 등록하기
    @PostMapping("/api/v1/posts")
    public Long save(@RequestBody PostsSaveRequestDto requestDto) {
        return postsService.save(requestDto);
    }

    // 수정기능
    @PutMapping("/api/v1/posts/{id}")
    public  Long update(@PathVariable Long id, @RequestBody PostsUpdateRequestDto requestDto) {
        return postsService.update(id, requestDto);
    }

    //조회하기
    @GetMapping("/api/v1/posts/{id}")
    public  PostsResponseDto findById (@PathVariable Long id)
    {
        return postsService.findById(id);
    }
}
