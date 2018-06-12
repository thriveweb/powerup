jQuery(document).ready(function () {
    if (jQuery('iframe#sf-frame').length == 1) {
        var isOldIE = (navigator.userAgent.indexOf("MSIE") !== -1); // Detect IE10 and below
        jQuery('iframe#sf-frame').iFrameResize({
            log: false,
            checkOrigin: false,
            enablePublicMethods: true,
            minHeight: 768,
            heightCalculationMethod: isOldIE ? 'max' : 'lowestElement'
        });
    }
});
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}