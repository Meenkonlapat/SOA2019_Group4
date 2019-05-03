const Eureka = require("eureka-js-client").Eureka;

module.exports = function()
{
  const client = new Eureka({
    instance: {
      app: 'companyService',
      hostName: 'localhost',
      ipAddr: '127.0.0.1',
      statusPageUrl: 'http://localhost:8080/info',
      port: {
        '$': 8080,
        '@enabled': 'true',
      },
      vipAddress: 'refix.company.com',
      dataCenterInfo: {
        '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
          name: 'MyOwn',// don't change this
        },
      },
      eureka: {
        host: '192.168.1.37',
        port: 8761,
        servicePath: '/eureka/apps/'
      },
    });
  client.start();
}