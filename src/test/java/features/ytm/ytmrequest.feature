Feature:Get get the ytm clm in staging
 
  
@getYtmDetails
Scenario: Get the details of tms

* def query = { organization: 'MARATHON PETROLEUM COMPANY LP', destination: 'PORTLAND,OR', serviceType: 'DATE_RANGE', fromDate: '2023-01-18T00:05',toDate:'2023-01-20T00:05' }

Given url ytmstgUrl
And header Authorization = call read('basic-auth.js'){username:'scyuser',password:'#2Z#B4@$'}
And params query
When method get
Then status 200
Then match response == "#object"
Then match response.summary.message == "success"
   