*** Settings ***
library  SeleniumLibrary


*** Variable ***

*** Test cases ***
UItest
    เปิดเว็บ
    ล็อคอิน
    เลือกบริษัทแล้วส่งแจ้งซ่อม
    เปิดหน้าข้อความ
    ล็อคเอ้าลูกค้า
    ล็อคอินช่าง
    ดูการแจ้งซ่อม
    ปิด
    เปิดเว็บ
    ล็อคอินช่าง
    เปิดข้อความช่าง
    ปิด

*** Keyword ***
เปิดเว็บ
    Open Browser    localhost:8080/  browser=chrome
    Maximize Browser Window
    Sleep    2s

ล็อคอิน
    Click Element    xpath://*[@id="navigations"]/nav/li[4]/a
    Sleep    2s
    Input Text    xpath://*[@id="usr"]    asd
    Sleep    2s
    Press Keys    None    ENTER  
    Sleep    2s

เลือกบริษัทแล้วส่งแจ้งซ่อม
    Click Element    xpath://*[@id="home"]/div[1]/div[2]/a/div/div
    Sleep    2s
    Click Element    xpath://*[@id="request"]
    Sleep    2s
    Input Text    xpath://*[@id="request"]/form/div[2]/div/input    ท่อแตก
    Input Text    xpath://*[@id="request"]/form/div[3]/div/textarea    หลังบ้านตรงซิ้งมีน้ำไหลจากท่อ
    Sleep    2s
    choose Ok on Next Confirmation
    Click Element    xpath://*[@id="request"]/div/button
    sleep    3s
    Confirm Action
    Sleep    5s

เปิดหน้าข้อความ
    Click Element    xpath://*[@id="navigations"]/nav/li[3]/a
    Sleep    2s
    Click Element    xpath://*[@id="messager"]/div/aside/ul/li[1]/div[2]
    Sleep    2s
    Input Text    xpath://*[@id="chat-screen"]/div/textarea    หลังบ้านตรงนั้น
    Sleep    2s
    Click Element    xpath://*[@id="sendButton"]
    sleep    3s

ล็อคเอ้าลูกค้า
    choose Ok on Next Confirmation
    Click Element    xpath://*[@id="navigations"]/nav/li[4]/div/a
    Sleep    2s
    Confirm Action
    Sleep    5s

ล็อคอินช่าง
    Click Element    xpath://*[@id="navigations"]/nav/li[4]/a
    Sleep    2s
    Input Text    xpath://*[@id="usr"]    companya
    Sleep    2s
    Click Element    xpath://*[@id="login"]/div/div[4]/button
    Sleep    2s

ดูการแจ้งซ่อม
    Click Element    xpath://*[@id="adminHome"]/div/div/div[1]/a/div/div
    Sleep    2s
ปิด
    close browser
    Sleep    2s

เปิดข้อความช่าง
    Click Element    xpath://*[@id="adminHome"]/div/div/div[2]/a/div/div
    Sleep    2s
    Click Element    xpath://*[@id="messager"]/div/aside/ul/li
    Sleep    2s
    Input Text    xpath://*[@id="chat-screen"]/div/textarea    หลังบ้านตรงนั้น
    Sleep    2s
    Click Element    xpath://*[@id="sendButton"]
    Sleep    2s

ล็อคเอ้าช่าง
    Click Element    xpath://*[@id="adminHome"]/a/button
    Sleep    5s






#ต้องเจอข้อมูลในหน้าแรก 10 เรื่อง
    #${count}=      Get Element Count    xpath://div/div/article
    #Should Be True    ${count} == 10
    #Page Should Contain Element    xpath://div/div/article    limit=10

