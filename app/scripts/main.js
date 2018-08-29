$(document).ready(function(){
   const tdata = new TData({
     selector: '#beaconiframe',
     access_token: 'ACCESS_TOKEN', //write your access_token
     path: '#!/services/' + 'CONTENT_SERVICE_ID' + '/beacon' // write your content service id
   });
 });

 $(document).ready(function(){
   const tdata = new TData({
     selector: '#analyticsiframe',
     access_token: 'ACCESS_TOKEN', //write your access_token
     path: '#!/services/' + 'CONTENT_SERVICE_ID' + '/analytics' // write your content service id
   });
 });

 $(document).ready(function(){
   const tdata = new TData({
     selector: '#heatmapiframe',
     access_token: 'ACCESS_TOKEN', //write your access_token
     path: '#!/services/' + 'CONTENT_SERVICE_ID' + '/heatMap' // write your content service id
   });
 });
