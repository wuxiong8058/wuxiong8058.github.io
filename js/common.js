/**
 * Created by Administrator on 2017/7/16.
 */
/*屏幕适配*/
//这里是共用的封装函数
var itcast = {
    // 封装函数：移动端适配
    //动态获取屏幕宽度并设置html字体大小
    adapter: function () {
        $(window).on("resize", function () {
            //获取当前设备宽度
            var
                deviceWidth = $(window).width(),
                html = $("html");
            if (deviceWidth > 750) {
                deviceWidth = 750;
                html.css("fontSize", 100);
            }
            else if(deviceWidth<440){
                deviceWidth = 440;
                html.css("fontSize", deviceWidth / 7.5);
            }
            else if (deviceWidth < 320) {
                deviceWidth = 320;
                html.css("fontSize", deviceWidth / 7.5);
            }
            else {
                html.css("fontSize", deviceWidth / 7.5);
            }
        }).trigger("resize");
    }
};
itcast.adapter();
