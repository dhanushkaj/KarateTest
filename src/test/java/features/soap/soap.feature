Feature: test soap end point

Background:
* url stgUrl
# this live url should work if you want to try this on your own
# * url 'http://www.dneonline.com/calculator.asmx'

Scenario: soap 1.1
    Given request read('request.xml')
    When soap action ''
    Then status 200
    And match /Envelope/Body/CarsLocationInquiryResponse/CarsLocationInquiryResult/ProcessingOutcome == 'Accepted'
    And match /Envelope/Body/CarsLocationInquiryResponse/CarsLocationInquiryResult/ProcessingMessages/Message == '4 ClmRecordsProcessed'
    And print 'response: ', response

