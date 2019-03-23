package com.soa2019.group4.refix.request.controller;

import com.soa2019.group4.refix.request.model.Request;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class RequestControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void request() {
        Request request = restTemplate.getForObject("/request/test", Request.class);
        assertEquals("hello world ! : test", request.getMessage());
    }
}