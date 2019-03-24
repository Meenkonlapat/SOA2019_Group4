package com.soa2019.group4.refix.bill;

import com.soa2019.group4.refix.request.model.Request;
import com.soa2019.group4.refix.request.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class BillService {
    private RequestRepository requestRepository;

    @Autowired
    public BillService(RequestRepository requestRepository)
    {
        this.requestRepository = requestRepository;
    }

    public String formatData(String id)
    {
        Optional<Request> customerRequest = requestRepository.findByCustomerId(id);
        return "Hello : " + customerRequest.get().getCustomerId();
    }
}
