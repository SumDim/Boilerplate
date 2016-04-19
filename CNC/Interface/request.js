//MDN Request- developer.mozilla.org
/*
onreadystatechange	Stores a function (or the name of a function) to be called automatically each time the readyState property changes
readyState	Holds the status of the XMLHttpRequest. Changes from 0 to 4:
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
status	200: "OK"
404: Page not found
*/
<script>

var xhr = new XMLHttpRequest();
var content = document.QuerySelector('#status-tbody');

xhr.open('GET', 'http://botnet.artificial.engineering/api/Status', true);
xhr.responseType = 'json';

xhr.onlaod = function(){

  xhr.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var data = xhr.response;
          if(data instanceof Array){

            var code = '';

                for(var d = 0, dl = data.length; d<dl; d++){

                  var entry = data[d];

                  code = code + '<tr>';
                  code = code + '<td>' + entry.id + '</td>';
                  code = code + '<td>' + entry.ip + '</td>';
                  code = code + '<td>' + entry.task + '</td>';
                  code = code + '<td>' + entry.workload + '</td>';
                  code = code + '</tr>';

                  console.log(data[d]);
                }
            content.innerHTML = code;
          }else {
            content.innerHTML ='Failed to load -.-';
          }

    }

};

xhr.send(null);

</script>
