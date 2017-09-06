$('.sparkline').each(function() {
    var barSpacing, barWidth, color, height;
    color = $(this).data('color') || 'red';
    height = '18px';
    if ($(this).hasClass('big')) {
        barWidth = '5px';
        barSpacing = '2px';
        height = '30px';
    }
    return $(this).sparkline('html', {
        type: 'bar',
        barColor: $(this).data('bar-color'),
        height: height,
        barWidth: barWidth,
        barSpacing: barSpacing,
        zeroAxis: false
    });
});
$(".chzn-select").select2();
$('.datetimepicker').datetimepicker({
    autoclose: true,
    startView: 2,
    minView: "month",
    format: 'yyyy-mm-dd',
    language: 'zh-CN'
});
$('.icheck').iCheck({
    checkboxClass: 'icheckbox_flat-aero',
    radioClass: 'iradio_flat-aero'
});
$.uniform.defaults.fileButtonHtml = '+';
$.uniform.defaults.selectAutoWidth = false;
$("select.uniform, input:file, .dataTables_length select").uniform();
$('.tip, [rel=tooltip]').tooltip({
    gravity: 'n',
    fade: true,
    html: true
});