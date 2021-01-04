$(document).ready(function () {
    $('.cc_name').hide();

    $('a.tip').qtip({
        content: "We ask for your credit card to allow your membership to continue after your free trial, should you choose not to cancel. This also allows us to reduce fraud and prevent multiple free trials for one person. This helps us deliver better service for all the honest customers. <br /><br /> Your credit card will not be charged at any point of your free trial. You can cancel anytime. <br /><br /> We'll even send you an email three days before your trial is over to remind you it's about to expire.",
        show: 'mouseover',
        hide: 'mouseout',
        style: { name: 'dark', tip: true, width: 400 },
        position: { corner: { target: 'topMiddle', tooltip: 'bottomMiddle' } }

    });

    $('a.user-pricing-tip').qtip({
        content: "After you create your account add additional users for $20/user per month. ",
        show: 'mouseover',
        hide: 'mouseout',
        style: { name: 'dark', tip: true, width: 350 },
        position: { corner: { target: 'topMiddle', tooltip: 'bottomMiddle' } }

    });

    $('a.subdomain-tip').qtip({
        content: "This is the URL you'll use to access your Bidsketch account. You can always change it later (if you're not sure what to use now).",
        show: 'mouseover',
        hide: 'mouseout',
        style: { name: 'dark', tip: true, width: 350 },
        position: { corner: { target: 'topMiddle', tooltip: 'bottomMiddle' } }

    });

    $("#account_name").keyup(
        function () {
            reg = /[^a-zA-Z0-9]+/g;
            cur_val = $(this).val().toLowerCase().replace(reg, '');;

            $("#account_domain").val(cur_val);
        }
    );

    $("#user_password").keyup(
        function () {
            $("#user_password_confirmation").val($(this).val());
        }
    );

    $("#signup_button").click(function () {
        $("#user_password_confirmation").val($("#user_password").val());
    });



    function showVersionB() {
        $('.version-a').hide();
        $('.version-b').show();

    }

    function showVersionA() {
        $('.version-b').hide();
        $('.version-a').show();
    }

    function showFormType(form_style) {
        if (form_style == 'classic') {
            showVersionA();
        } else {
            showVersionB();
        }
    }

    //_kmq.push(function(){
    //var form_style = KM.ab("Signup Form Style", ["classic", "trustified"]);
    //showFormType(form_style);
    //});
});



// 


(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
    h._hjSettings = { hjid: 460213, hjsv: 5 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script'); r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, '//static.hotjar.com/c/hotjar-', '.js?sv=');






var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-3996351-4']);
_gaq.push(['_setDomainName', 'bidsketch.com']);
_gaq.push(['_addIgnoredRef', 'bidsketch.com']);
_gaq.push(['_trackPageview']);
(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


!function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }; if (!f._fbq) f._fbq = n;
    n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
}(window,
    document, 'script', '//connect.facebook.net/en_US/fbevents.js');

fbq('init', '1392697201031999');
fbq('track', "PageView");