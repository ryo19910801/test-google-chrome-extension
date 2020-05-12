function $(id){
	return document.getElementById(id);
}

function init(){
	$("message_txt").value = localStorage["message_txt"] ? localStorage["message_txt"] : "";
}

function save(){
	localStorage["message_txt"] = $("message_txt").value;
}
