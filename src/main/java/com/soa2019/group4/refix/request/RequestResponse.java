package com.soa2019.group4.refix.request;

public class RequestResponse {

    private String message;

    public RequestResponse()
    {

    }

    public  RequestResponse(String message)
    {
        this.setMessage(message);
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
