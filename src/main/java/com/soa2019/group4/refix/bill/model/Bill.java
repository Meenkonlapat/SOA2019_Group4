package com.soa2019.group4.refix.bill.model;

public class Bill {

    private long cost;
    private long invoice;

    public Bill()
    {

    }
    public Bill(Long cost, long invoice) {


        this.cost = cost;
        this.invoice = invoice;
    }

    public long getInvoice() {
        return invoice;
    }

    public void setInvoice(long id) {
        this.invoice = invoice;
    }

    public long getCost() {
        return cost;
    }

    public void setCost(long id) {
        this.cost = cost;
    }
}


