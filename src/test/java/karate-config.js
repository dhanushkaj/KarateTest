function fn() {   
  var env = karate.env; // get java system property 'karate.env'
  var port = karate.properties['demo.server.port'] || '8080';
  var protocol = 'http';
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev'; // a custom 'intelligent' default
  }
  var config = { // base config JSON
    token: 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJXZHdNd2t1ZUtmaXlkSmg2aVU4b20wNGVweEQ4cEpKNTlNVzVuLS1aSlFRIn0.eyJleHAiOjE2OTgxNDUwNTUsImlhdCI6MTY2NjYwOTA1NSwianRpIjoiZWM3ZTNjMjktMGIzOC00MWU3LThlMDctNGJmODNlMWU1MTYzIiwiaXNzIjoiaHR0cHM6Ly9zdGctYXV0aC5rYWxlcmlzLm5ldC9yZWFsbXMvc2hpcHhwcmVzcyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJkNDI2ZmZmYy01YWYzLTQ4ZTYtOTE2OC02ZmRlNWZjZDNiNjAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJ0cmF4LWNsbS1zZXJ2aWNlIiwic2Vzc2lvbl9zdGF0ZSI6ImFkMzI3YWQxLWQ2YTctNGI2Ny1iOGUwLTU0M2U1ODA2YWJiMSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXNoaXB4cHJlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwga2FsZXJpcyBwcm9maWxlIiwic2lkIjoiYWQzMjdhZDEtZDZhNy00YjY3LWI4ZTAtNTQzZTU4MDZhYmIxIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJzeC11c2VyLWlkIjoieG1sY2xlYW5oYXJiZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ4bWxjbGVhbmhhcmJlcl85NTJiNDZjYjI1Mjc5MzcyZGFmNDVjZGQ0YzZjY2FmYyIsImVtYWlsIjoiZGpheWF0aGlsYWthQGthbGVyaXMuY29tIn0.F5j2fkyKm9JNktGEiEOAzbbqz3t_F1VY5ONBeoXsZLz7fMWslPyStQJTrs66Cjs2VF48K8CSH9EP02IdvpK6F7Ng2CuOT00EqyVS7SG5FPFzQuYV9sWKOrW8_l7y6YcRxIxejpLtl3GBBAlnXefHk6aIkd-nUo5FUUvHrqmrRYy7I8bq9gBIRS9kBy3vjN0OI-ja-RVbUEmSrwxrLEA9tFpYK2_RXYQOLDez9Vlth6fHPp0fmwHdtQDjB9R4_0PjELRiNCk1iH24n2CbWSpkH1PbTJrFnE2QPstLW0jz8gC3tiFIA6x2LZzabvx-uQHq9sNStQMAc-rOi5dezQx-Wg',
    stgUrl: 'https://sxstg.shipxpress.net:443/itrax/clmWebService',
    ytmstgUrl:'https://sxstg.shipxpress.net/itrax/scyShipmentServiceSupport!listShipments.action'
  };
  

    
  if (env == 'stage') {
    // over-ride only those that need to be
    config.someUrlBase = 'https://stage-host/v1/auth';
  } else if (env == 'e2e') {
    config.someUrlBase = 'https://e2e-host/v1/auth';
  }
  // don't waste time waiting for a connection or if servers don't respond within 5 seconds
  karate.configure('connectTimeout', 50000);
  karate.configure('readTimeout', 50000);
  return config;
}