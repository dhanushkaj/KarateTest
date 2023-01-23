Feature:Get the user details of 2
 	Background: set URL
  * url 'https://reqres.in/api'
  
  @getUser
  Scenario: Get the details of user2
   Given path "users/2"
   When method get
   Then status 200
   
   
  @createUser 
  Scenario: Create A person
   Given path "users"
   And request
   """
   {
    "name": "morpheus1",
    "job": "leader1",
   }
   
   """
   When method post
   Then status 201
   Then match response == "#object"
   Then match response.name == "morpheus1"
   
   * def personId = response
   
   @getUserbyParam  
   Scenario: Get the details of user by param
   Given path "users"
   And param page = "2"
   When method get
   Then status 200
   Then match response.page == 2