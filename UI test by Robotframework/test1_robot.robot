*** Settings ***
library  Selenium2Library

*** Variable ***

*** Test cases ***
UItest
    เปิดเว็บ
    ล็อคอินลูกค้า
    เลือกบริษัท
    แจ้งซ่อม
    ไปหน้าโฮม
    เลือกบริษัท
    ติดต่อหาช่าง
    ล็อคเอ้าลูกค้า
    ล็อคอินช่าง
    ติดต่อหาลูกค้า
    ย้อนหน้าช่าง
    ดูการแจ้งซ่อม
    ย้อนหน้าช่าง
    ย้อนหน้าช่าง
    ล็อคเอ้าช่าง
    ล็อคอินลูกค้า
    ไปสเตตัส
    #โหลด
    คอนเฟริม
    #โหลด
    ล็อคเอ้าลูกค้า
    #ปิด

*** Keyword ***
เปิดเว็บ
    Open Browser    https://refixsoa2019.firebaseapp.com/  browser=chrome
    Maximize Browser Window
    Sleep    2s
    
ล็อคอินลูกค้า
    Click Element    name:login
    Sleep    2s
    Input Text    id:usr    asd
    Sleep    2s
    Press Keys    None    ENTER  
    Sleep    2s

ล็อคเอ้าลูกค้า
    choose Ok on Next Confirmation
    Click Element    name:logout
    Sleep    2s
    Confirm Action
    Sleep    2s

ล็อคอินช่าง
    Click Element    name:login
    Sleep    2s
    Input Text    id:usr    companya
    Sleep    2s
    Press Keys    None    ENTER  
    Sleep    2s

ดูการแจ้งซ่อม
    Click Element    name:repair_request
    Sleep    2s
    Click Element    id:btnView
    Sleep    2s
    Input Text    name:detailbill    ค่าหลอดไฟ
    Sleep    2s
    Input Text    name:price    200
    Sleep    2s
    Click Element    name:addBill
    Sleep    2s

ปิด
    close browser
    Sleep    2s

เลือกบริษัท
    Click Element    xpath://*[@id="home"]/div[2]/div[2]/a[1]/div
    Sleep    2s

แจ้งซ่อม
    Click Element    requestBT
    Sleep    2s
    Input Text    name:repair    ไฟดับ
    Input Text    name:repairDetail    หลอดไฟขาด
    Sleep    2s
    choose Ok on Next Confirmation
    Click Element    name:confirm_request
    Sleep    2s
    Confirm Action
    Sleep    3s

ไปหน้าโฮม
    Click Element    name:home
    Sleep    2s

ติดต่อหาช่าง
    Click Element    name:contactBT
    Sleep    2s
    Click Element    xpath://*[@id="messager"]/div/aside/ul/li
    Sleep    2s
    Input Text    name:chattext    ไปดับต้องซ่อมไง
    Sleep    2s
    Click Element    id:sendButton
    Sleep   2s

ติดต่อหาลูกค้า
    Click Element    message_mechanic
    Sleep    2s
    Click Element    xpath://*[@id="messager"]/div/aside/ul/li
    Sleep    2s
    Input Text    name:chattext    เปลี่ยนหลอด
    Sleep    2s
    Click Element    id:sendButton
    Sleep    2s

ไปสเตตัส
    Click Element    name:status
    Sleep    2s

คอนเฟริม
    choose Ok on Next Confirmation
    Click Button    name:confirm
    Sleep    2s
    Confirm Action
    Sleep    2s
    Confirm Action 
    Sleep    2s

ย้อนหน้าช่าง
    Click Button    id:backPage
    Sleep    2s

ล็อคเอ้าช่าง
    choose Ok on Next Confirmation
    Click Button    name:logout2
    Sleep    2s
    Confirm Action
    Sleep    2s


