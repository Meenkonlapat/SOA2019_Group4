package com.soa2019.group4.refix.bill.controller;

import com.soa2019.group4.refix.bill.model.Bill;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class BillController {

    @GetMapping("bill/{message}")
    Bill bill(@PathVariable Long invoice)
    {
        return new Bill("hello world ! : " + invoice);
    }
}

