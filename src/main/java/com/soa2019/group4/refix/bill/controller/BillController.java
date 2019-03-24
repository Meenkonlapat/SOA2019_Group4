package com.soa2019.group4.refix.bill.controller;

import com.soa2019.group4.refix.request.model.Request;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class BillController {

    @GetMapping("bill/{message}")
    Request bill(@PathVariable String message)
    {
        return new Request("hello world ! : " + message);
    }
}
