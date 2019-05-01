*** Settings ***
library  SeleniumLibrary


*** Variable ***

*** Test cases ***
ทำอะไรสักอย่าง
    ไปยังหน้าเว็บ
    ทำการล็อคอิน
    เลือกบริษัท
    เลือกหน้าสเตตัส
    logout
    ปิด

*** Keyword ***
เลือกหน้าสเตตัส
    Click Element    xpath://*[@id="navigations"]/nav/li[2]/a
    Sleep   5s
    Click Element    xpath://*[@id="navigations"]/nav/li[1]/a
    Sleep   2s

เลือกบริษัท
    Click Element    xpath://*[@id="home"]/div[1]/div[2]/a/div/div
    Sleep   2s
    Click Element    xpath://*[@id="request"]
    Sleep   2s
    Click Element    xpath://*[@id="request"]/div/button[2]
    Sleep   2s

ทำการล็อคอิน
    Click Element    xpath://*[@id="navigations"]/nav/li[4]/a
    Sleep   2s
    Input Text    xpath://*[@id="usr"]    asd
    Sleep   2s
    Click Element    xpath://*[@id="login"]/div/div[4]/button
    Sleep   2s

logout
    choose Ok on Next Confirmation
    Click Element    xpath://*[@id="navigations"]/nav/li[4]/div/a
    Sleep   2s
    Confirm Action
    Sleep   5s

ไปยังหน้าเว็บ
    Open Browser    localhost:8080/  browser=chrome
    Maximize Browser Window
    Sleep   2s

ปิด
    close browser

#ต้องเจอข้อมูลในหน้าแรก 10 เรื่อง
    #${count}=      Get Element Count    xpath://div/div/article
    #Should Be True    ${count} == 10
    #Page Should Contain Element    xpath://div/div/article    limit=10
