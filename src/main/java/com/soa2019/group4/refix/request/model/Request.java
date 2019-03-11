package com.soa2019.group4.refix.request.model;

public class Request {

    private String message;

    public Request()
    {

    }

    public Request(String message)
    {
        this.message = message;
    }

    public String getmessage() {
        return message;
    }

    public void setmessage(String message) {
        this.message = message;
    }
}
