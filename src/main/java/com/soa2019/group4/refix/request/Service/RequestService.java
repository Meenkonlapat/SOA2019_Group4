package com.soa2019.group4.refix.request.Service;

import com.soa2019.group4.refix.request.model.Request;
import com.soa2019.group4.refix.request.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RequestService {

    private RequestRepository requestRepository;

    @Autowired
    public RequestService(RequestRepository requestRepository)
    {
        this.requestRepository = requestRepository;
    }

    public String formatData(String id)
    {
        Optional<Request> customerRequest = requestRepository.findByCustomerId(id);
        return "Hello : " + customerRequest.get().getCustomerId();
    }
}
