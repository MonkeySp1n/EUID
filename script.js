window.onpageshow = function(){
    interval = setInterval(function (){
        if (this.document.getElementsByTagName('iframe').length > 0) {
            var userid = this.document.getElementsByTagName('iframe')[0].contentWindow.user._id;
            if (this.document.getElementsByTagName('iframe')[0].contentWindow.user._id != this.document.getElementsByTagName('iframe')[0].contentWindow.user.username){
                console.log(userid)
            }
            this.document.getElementsByTagName('iframe')[0].contentWindow.user.username = userid
        }else if(location.pathname.indexOf('/ws/') == 0) {
            var userid = this.user._id;
            if (user._id != user.username){
                console.log(userid)
            }
            this.user.username = userid
        }
    }, 10)
}