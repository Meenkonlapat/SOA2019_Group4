*** Settings ***
library  SeleniumLibrary


*** Variable ***

*** Test cases ***
UItest
    เปิดเว็บ
    #ล็อคอินลูกค้า
    #เปิดเว็บ
    #ล็อคอินช่าง
    #สลับ
    #เปิดเว็บ
    #ล็อคอินลูกค้า
    #เลือกบริษัท
    #แจ้งซ่อม
    #ไปหน้าโฮม
    #เลือกบริษัท
    #ติดต่อหาช่าง
    #ล็อคเอ้าลูกค้า
    #ล็อคอินช่าง
    #ติดต่อหาลูกค้า
    #ปิด
    #เปิดเว็บ
    #ล็อคอินช่าง
    #ดูการแจ้งซ่อม
    #แก้บิล
    #ปิด
    #เปิดเว็บ
    #ล็อคอินลูกค้า
    #ไปสเตตัส
    #โหลด
    #คอนเฟริม
    #โหลด
    #ล็อคเอ้าลูกค้า
    #ปิด

*** Keyword ***
เปิดเว็บ
    Open Browser    localhost:8080/  browser=chrome
    Maximize Browser Window
    Sleep    2s
    Go To    https://www.google.co.th/
    Sleep    2s
    Go Back

ล็อคอินลูกค้า
    Click Element    xpath://*[@id="navigations"]/nav/li[4]/a
    Sleep    2s
    Input Text    xpath://*[@id="usr"]    asd
    Sleep    2s
    Press Keys    None    ENTER  
    Sleep    2s

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

เลือกบริษัท
    Click Element    xpath://*[@id="home"]/div[2]/div[2]/a[1]/div
    Sleep    2s

แจ้งซ่อม
    Click Element    xpath://*[@id="button-group"]/a/div
    Sleep    2s
    Input Text    xpath://*[@id="request"]/form/div[2]/div/input    ไฟดับ
    Input Text    xpath://*[@id="request"]/form/div[4]/div/textarea    หลอดไฟขาด
    Sleep    2s
    choose Ok on Next Confirmation
    Click Element    xpath://*[@id="request"]/div/button
    Sleep    2s
    Confirm Action
    Sleep    3s

ไปหน้าโฮม
    Click Element    xpath://*[@id="navigations"]/nav/li[1]/a
    Sleep    2s

ติดต่อหาช่าง
    Click Element    xpath://*[@id="button-group"]/div
    Sleep    2s
    Click Element    xpath://*[@id="messager"]/div/aside/ul/li
    Sleep    2s
    Input Text    xpath://*[@id="chat-screen"]/div/textarea    ไปดับต้องซ่อมไง
    Sleep    2s
    Click Element    xpath://*[@id="sendButton"]
    Sleep   2s

ติดต่อหาลูกค้า
    Click Element    xpath://*[@id="adminHome"]/div/div/div[2]
    Sleep    2s
    Click Element    xpath://*[@id="messager"]/div/aside/ul/li
    Sleep    2s
    Input Text    xpath://*[@id="chat-screen"]/div/textarea    เปลี่ยนหลอด
    Sleep    2s
    Click Element    xpath://*[@id="sendButton"]
    Sleep    2s

แก้บิล
    Click Element    xpath://*[@id="btnView"]
    Sleep    2s
    Input Text    xpath://*[@id="addExtension"]/div/form/div/div[1]/input    ค่าหลอดไฟ
    Sleep    2s
    Input Text    xpath://*[@id="addExtension"]/div/form/div/div[2]/input    200
    Sleep    2s
    Click Element    xpath://*[@id="addExtension"]/div/form/div/button
    Sleep    2s

ไปสเตตัส
    Click Element    xpath://*[@id="navigations"]/nav/li[2]/a
    Sleep    2s

คอนเฟริม
    choose Ok on Next Confirmation
    Click Button    xpath://*[@id="status"]/div/table/tbody/tr[3]/td[5]/button
    Sleep    2s
    Confirm Action
    Sleep    3s
    Press Keys    None    ENTER  
    Sleep    2s

ย้อนหน้าช่าง
    Click Element    xpath://*[@id="lookAllRequrst"]/div/a/button
    Sleep    2s

ล็อคเอ้าช่าง
    Click Element    xpath://*[@id="adminHome"]/a/button
    Sleep    2s

สลับ
    Switch Browser
    Sleep    2s

#ต้องเจอข้อมูลในหน้าแรก 10 เรื่อง
    #${count}=      Get Element Count    xpath://div/div/article
    #Should Be True    ${count} == 10
    #Page Should Contain Element    xpath://div/div/article    limit=10

