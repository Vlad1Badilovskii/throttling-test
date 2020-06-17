var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "15",
        "ko": "1985"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "284",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "365",
        "ok": "355",
        "ko": "365"
    },
    "meanResponseTime": {
        "total": "15",
        "ok": "327",
        "ko": "12"
    },
    "standardDeviation": {
        "total": "52",
        "ok": "28",
        "ko": "44"
    },
    "percentiles1": {
        "total": "4",
        "ok": "342",
        "ko": "4"
    },
    "percentiles2": {
        "total": "5",
        "ok": "353",
        "ko": "5"
    },
    "percentiles3": {
        "total": "16",
        "ok": "354",
        "ko": "15"
    },
    "percentiles4": {
        "total": "324",
        "ok": "355",
        "ko": "308"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 1
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
    "count": 1985,
    "percentage": 99
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "0.75",
        "ko": "99.25"
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
        "total": "2000",
        "ok": "15",
        "ko": "1985"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "284",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "365",
        "ok": "355",
        "ko": "365"
    },
    "meanResponseTime": {
        "total": "15",
        "ok": "327",
        "ko": "12"
    },
    "standardDeviation": {
        "total": "52",
        "ok": "28",
        "ko": "44"
    },
    "percentiles1": {
        "total": "4",
        "ok": "342",
        "ko": "4"
    },
    "percentiles2": {
        "total": "5",
        "ok": "353",
        "ko": "5"
    },
    "percentiles3": {
        "total": "16",
        "ok": "354",
        "ko": "15"
    },
    "percentiles4": {
        "total": "324",
        "ok": "355",
        "ko": "308"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 1
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
    "count": 1985,
    "percentage": 99
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "0.75",
        "ko": "99.25"
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
