var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "162",
        "ko": "838"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "318",
        "ok": "318",
        "ko": "167"
    },
    "meanResponseTime": {
        "total": "13",
        "ok": "40",
        "ko": "8"
    },
    "standardDeviation": {
        "total": "37",
        "ok": "82",
        "ko": "14"
    },
    "percentiles1": {
        "total": "5",
        "ok": "4",
        "ko": "5"
    },
    "percentiles2": {
        "total": "7",
        "ok": "7",
        "ko": "7"
    },
    "percentiles3": {
        "total": "16",
        "ok": "234",
        "ko": "12"
    },
    "percentiles4": {
        "total": "218",
        "ok": "304",
        "ko": "86"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 162,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 838,
    "percentage": 84
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "14.727",
        "ko": "76.182"
    }
},
contents: {
"req_user-without-to-47081": {
        type: "REQUEST",
        name: "User without token",
path: "User without token",
pathFormatted: "req_user-without-to-47081",
stats: {
    "name": "User without token",
    "numberOfRequests": {
        "total": "1000",
        "ok": "162",
        "ko": "838"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "318",
        "ok": "318",
        "ko": "167"
    },
    "meanResponseTime": {
        "total": "13",
        "ok": "40",
        "ko": "8"
    },
    "standardDeviation": {
        "total": "37",
        "ok": "82",
        "ko": "14"
    },
    "percentiles1": {
        "total": "5",
        "ok": "4",
        "ko": "5"
    },
    "percentiles2": {
        "total": "7",
        "ok": "7",
        "ko": "7"
    },
    "percentiles3": {
        "total": "16",
        "ok": "234",
        "ko": "12"
    },
    "percentiles4": {
        "total": "218",
        "ok": "304",
        "ko": "86"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 162,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 838,
    "percentage": 84
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "14.727",
        "ko": "76.182"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
