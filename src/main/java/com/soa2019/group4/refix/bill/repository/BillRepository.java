package com.soa2019.group4.refix.bill.repository;

import com.soa2019.group4.refix.bill.model.Bill;
import com.soa2019.group4.refix.request.model.Request;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface BillRepository extends CrudRepository<Bill, Long> {

    Optional<Request> findByInvoice(Long InvoiceId);
}

