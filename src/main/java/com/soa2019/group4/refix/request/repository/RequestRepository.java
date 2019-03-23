package com.soa2019.group4.refix.request.repository;

import com.soa2019.group4.refix.request.model.Request;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface RequestRepository extends CrudRepository<Request, Long> {

    Optional<Request> findByCustomerId(String customerId);
}
