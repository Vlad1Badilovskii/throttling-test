var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "73",
        "ko": "927"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "281",
        "ok": "281",
        "ko": "211"
    },
    "meanResponseTime": {
        "total": "12",
        "ok": "54",
        "ko": "9"
    },
    "standardDeviation": {
        "total": "34",
        "ok": "89",
        "ko": "22"
    },
    "percentiles1": {
        "total": "5",
        "ok": "7",
        "ko": "5"
    },
    "percentiles2": {
        "total": "7",
        "ok": "34",
        "ko": "7"
    },
    "percentiles3": {
        "total": "17",
        "ok": "264",
        "ko": "12"
    },
    "percentiles4": {
        "total": "197",
        "ok": "280",
        "ko": "159"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 73,
    "percentage": 7
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
    "count": 927,
    "percentage": 93
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "6.636",
        "ko": "84.273"
    }
},
contents: {
"req_user-with-token-cf66b": {
        type: "REQUEST",
        name: "User with token",
path: "User with token",
pathFormatted: "req_user-with-token-cf66b",
stats: {
    "name": "User with token",
    "numberOfRequests": {
        "total": "1000",
        "ok": "73",
        "ko": "927"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "281",
        "ok": "281",
        "ko": "211"
    },
    "meanResponseTime": {
        "total": "12",
        "ok": "54",
        "ko": "9"
    },
    "standardDeviation": {
        "total": "34",
        "ok": "89",
        "ko": "22"
    },
    "percentiles1": {
        "total": "5",
        "ok": "7",
        "ko": "5"
    },
    "percentiles2": {
        "total": "7",
        "ok": "34",
        "ko": "7"
    },
    "percentiles3": {
        "total": "17",
        "ok": "264",
        "ko": "12"
    },
    "percentiles4": {
        "total": "197",
        "ok": "280",
        "ko": "159"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 73,
    "percentage": 7
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
    "count": 927,
    "percentage": 93
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "6.636",
        "ko": "84.273"
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
