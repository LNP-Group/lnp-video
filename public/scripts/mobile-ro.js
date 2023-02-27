// Author: LNP Group
// Date: 2023-02-27
// Description: Redirects mobile users to the mobile site.

// Redirect users to specified url.

function RedirectSmartphone(url){
    if (url && url.length > 0 && IsSmartphone())
    window.location = url;
}

// Detect the device type used by the user.

function IsSmartphone(){
    if (DetectUagent("android")) return true;
    else if (DetectUagent("blackberry")) return true;
    else if (DetectUagent("iphone")) return true;
    else if (DetectUagent("palm")) return true;
    else if (DetectUagent("generic")) return true;
    else if (DetectUagent("ipad")) return true;
    else if (DetectUagent("ipod")) return true;
    return false;
}

// Detect the user agent string.

function DetectUagent(name){
    var uagent = navigator.userAgent.toLowerCase();
    if (uagent.search(name) > -1)
    return true;
    else
    return false;
}

// Call the RedirectSmartphone() function.

RedirectSmartphone("https://video.lnp-group.com/ro/neacceptat");