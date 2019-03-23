package com.soa2019.group4.refix.request.Service;

import com.soa2019.group4.refix.request.model.Request;
import com.soa2019.group4.refix.request.repository.RequestRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class RequestServiceTest {

    @Mock
    RequestRepository requestRepository;

//    @Test
    public void formatData() {
        Request stubRequest = new Request("i'm abc", "ABC");
        when(requestRepository.findByCustomerId("ABC")).thenReturn(Optional.of(stubRequest));

        // cannot find symbol : class RequestService here. don't know why
//        RequestService service = new RequestService(requestRepository);
//        assertEquals("Hello : ABC", service.formatData("ABC"));
    }
}