package com.soa2019.group4.refix.bill;

import com.soa2019.group4.refix.bill.repository.BillRepository;
import com.soa2019.group4.refix.request.model.Request;
import com.soa2019.group4.refix.request.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class BillService {
    private BillRepository billRepository;

    @Autowired
    public BillService(BillRepository billRepository)
    {
        this.billRepository = billRepository;
    }

    public String formatData(Long invoice)
    {
        Optional<Request> billInvoice = billRepository.findByInvoice(invoice);
        return "Hello : " + billInvoice.get().getId();
    }
}
