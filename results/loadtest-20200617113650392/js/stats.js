var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "55",
        "ko": "945"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "87",
        "ok": "42",
        "ko": "87"
    },
    "meanResponseTime": {
        "total": "4",
        "ok": "9",
        "ko": "4"
    },
    "standardDeviation": {
        "total": "6",
        "ok": "11",
        "ko": "6"
    },
    "percentiles1": {
        "total": "3",
        "ok": "4",
        "ko": "3"
    },
    "percentiles2": {
        "total": "5",
        "ok": "5",
        "ko": "5"
    },
    "percentiles3": {
        "total": "6",
        "ok": "32",
        "ko": "6"
    },
    "percentiles4": {
        "total": "43",
        "ok": "40",
        "ko": "43"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 55,
    "percentage": 6
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
    "count": 945,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "5.5",
        "ko": "94.5"
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
        "ok": "55",
        "ko": "945"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "87",
        "ok": "42",
        "ko": "87"
    },
    "meanResponseTime": {
        "total": "4",
        "ok": "9",
        "ko": "4"
    },
    "standardDeviation": {
        "total": "6",
        "ok": "11",
        "ko": "6"
    },
    "percentiles1": {
        "total": "3",
        "ok": "4",
        "ko": "3"
    },
    "percentiles2": {
        "total": "5",
        "ok": "5",
        "ko": "5"
    },
    "percentiles3": {
        "total": "6",
        "ok": "32",
        "ko": "6"
    },
    "percentiles4": {
        "total": "43",
        "ok": "40",
        "ko": "43"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 55,
    "percentage": 6
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
    "count": 945,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "5.5",
        "ko": "94.5"
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
