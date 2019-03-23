package com.soa2019.group4.refix.request.repository;

import com.soa2019.group4.refix.request.model.Request;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@DataJpaTest
public class RequestRepositoryTest {

    @Autowired
    private RequestRepository requestRepository;

    @Test
    public void findByCustomerIdWithABC()
    {
        Request abcRequest = new Request("i'm abc", "ABC");
        requestRepository.save(abcRequest);

        Optional<Request> customerRequest = requestRepository.findByCustomerId("ABC");

        assertEquals("i'm abc", customerRequest.get().getMessage());
        assertEquals("ABC", customerRequest.get().getCustomerId());
    }

}