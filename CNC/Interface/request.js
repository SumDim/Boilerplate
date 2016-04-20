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
var table_reload_interval;

var initialize = function() {
var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://botnet.artificial.engineering:8080/api/Status', true);
xhr.responseType = 'json';
xhr.send();
xhr.onload = function(){
      if (xhr.readyState == 4 && xhr.status == 200) {
        var content = document.querySelector('#status-tbody');
        var data = xhr.response;
            if(data instanceof Array){
              var code = '';

                  for(var d = 0, dl = data.length; d<dl; d++){
                    var entry = data[d];
                    code = code + '<tr>';
                    code = code + '<td class="spalten">' + entry.workload + '</td>';
                    code = code + '<td class="spalten">' + entry.ip + '</td>';
                    code = code + '<td class="spalten">' + entry.id + '</td>';
                    //code + '<td>' + entry.task + '</td>';
                    code = code + '<td class="table_button_spalten">' + '<button type="button" class="button_stop">'+'Stop!'+'</button>'+'<button type="button" class"button_start">'+'Start!'+'</button>'+ '</td>';

                    code = code + '</tr>';

                    console.log(data[d]);
                  }
              content.innerHTML = code;
            }else {
              content.innerHTML ='Failed to load -.-';
            }

      }

};
table_reload_interval=setInterval(function(){alert('repeat');, 3000);
};


function stop_table_interval_reload() {
    clearTimeout(table_reload_interval);
}
