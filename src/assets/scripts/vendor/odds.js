$.odds = {
    element: null,
    templete: null,
    fetch: function fetch($data) {
        var $tpl = '<table class="responsive dataTable table-striped">';
        var $collect = collect($data);
        $collect.each(function($item){
            $($item).each(function($key, $value){
                var $numberInfo = JSON.parse($value.number_info);
                $tpl += '<tr>';
                $tpl += '<th class="text-right" width="200"><span class="text-danger">' + $numberInfo.type[0] + '</span>-<span class="text-success">' + $numberInfo.type[1] + '</span>-[<span class="text-info">' + $numberInfo.title + '</span>]:&nbsp;</th>';
                $tpl += '<td><input type="text" name="numbers[' + $value.number_id + ']" value="">';
                $tpl += '</tr>';
            });
        });
        $tpl += '</table>';
        $.odds.templete = $tpl;
    },
    run: function(){
        $($.odds.element + '>div').append($.odds.templete)
    }
};

$('.odds-tabs li a').on('shown.bs.tab', function (e) {
    $numCls = $(this).data('number');
    $.odds.element = $(this).attr('href');
    axios.post('http://tiger.socket.leyoule1.com/api/numbers', {
        class: $numCls
    }).then(function (response) {
        $.odds.fetch(response.data);
        $.odds.run();
    }).catch(function (error) {
        console.log(error);
    });
});


