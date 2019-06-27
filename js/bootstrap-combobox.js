
jQuery(function() {


	$(function() {
	    var obj_arr = [
	        { srt: "pokemon", full: "日本語", priority: 3 },
	        { srt: "pso2", full: "語学", priority: 2 },
	        { srt: "bms1", full: "テスト", priority: 5 },
	        { srt: "bms2", full: "太郎", priority: 6 },
	        { srt: "bms3", full: "次郎", priority: 7 },
	        { srt: "bms4", full: "野村太郎", priority: 8 },
	        { srt: "bms5", full: "村人", priority: 9 },
	        { srt: "bms6", full: "村人1", priority: 9 },
	        { srt: "bms7", full: "村人2", priority: 9 },
	        { srt: "bms8", full: "be music script", priority: 1 },
	    ];
	    $("#inputform").autocomplete({
	         source: function (req, resp) {
	             resp($.map(obj_arr, function (value, key) {
	                if (value.full.indexOf(req.term) >= 0) {
	                    return {
	                        label: value.full,
	                        value: value.srt,
	                        data: value,
	                    };
	                }
	            }));
	        },
	        minLength: 1, // 三文字以上入力すると候補が出てくる
	        select: function (e, d){
	             var data = d.item.data;
	             $("#inputform").val(data.full);
	             $("#desc").text("優先度: " + data.priority);
	             return false;
	        },
	    });
	});

});


