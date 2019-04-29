*** Settings ***
library  SeleniumLibrary

*** Variable ***

*** Test cases ***
ทำอะไรสักอย่าง
    ไปยังหน้าเว็บ
    ทำการล็อคอิน
    เลือกบริษัท
    เลือกหน้าสเตตัส

*** Keyword ***
เลือกหน้าสเตตัส
    Click Element    xpath://*[@id="navigations"]/nav/li[2]/a
    Click Element    xpath://*[@id="navigations"]/nav/li[1]/a

เลือกบริษัท
    Click Element    xpath://*[@id="home"]/div[1]/div[2]/a/div/div
    Click Element    xpath://*[@id="button-group"]/a[1]
    Click Element    xpath://*[@id="popup1"]/div/a

ทำการล็อคอิน
    Click Element    xpath://*[@id="navigations"]/nav/li[4]/a
    Input Text    xpath://*[@id="usr"]    asd
    Click Element    xpath://*[@id="login"]/div/div[4]/button

ไปยังหน้าเว็บ
    Open Browser    localhost:8080/  browser=chrome
    Maximize Browser Window

#ปิด
    #close browser

#ต้องเจอข้อมูลในหน้าแรก 10 เรื่อง
    #${count}=      Get Element Count    xpath://div/div/article
    #Should Be True    ${count} == 10
    #Page Should Contain Element    xpath://div/div/article    limit=10
