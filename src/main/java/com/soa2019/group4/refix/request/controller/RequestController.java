package com.soa2019.group4.refix.request.controller;

import com.soa2019.group4.refix.request.model.Request;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RequestController {

    @GetMapping("request/{message}")
    public Request request(@PathVariable String message)
    {
        return new Request("hello world ! : " + message);
    }
}
