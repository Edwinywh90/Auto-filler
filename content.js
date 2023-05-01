chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try {
            document.getElementById("QR~QID137~1").value = request.accountname;
            document.getElementById("QR~QID137~2").value = request.accountlink;
            document.getElementById("QR~QID133").value = request.description;
            document.getElementById("QR~QID132").value = request.email;
            sendResponse({status: "Success!"});
        } catch (error) {
            console.log(error)
            sendResponse({status: "Exception occurred!"});
        }
    }
);