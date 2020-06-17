var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "166",
        "ko": "834"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "376",
        "ok": "376",
        "ko": "307"
    },
    "meanResponseTime": {
        "total": "11",
        "ok": "29",
        "ko": "7"
    },
    "standardDeviation": {
        "total": "39",
        "ok": "67",
        "ko": "29"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "3"
    },
    "percentiles2": {
        "total": "4",
        "ok": "4",
        "ko": "4"
    },
    "percentiles3": {
        "total": "33",
        "ok": "178",
        "ko": "5"
    },
    "percentiles4": {
        "total": "267",
        "ok": "307",
        "ko": "175"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 166,
    "percentage": 17
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
    "count": 834,
    "percentage": 83
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "16.6",
        "ko": "83.4"
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
        "ok": "166",
        "ko": "834"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "376",
        "ok": "376",
        "ko": "307"
    },
    "meanResponseTime": {
        "total": "11",
        "ok": "29",
        "ko": "7"
    },
    "standardDeviation": {
        "total": "39",
        "ok": "67",
        "ko": "29"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "3"
    },
    "percentiles2": {
        "total": "4",
        "ok": "4",
        "ko": "4"
    },
    "percentiles3": {
        "total": "33",
        "ok": "178",
        "ko": "5"
    },
    "percentiles4": {
        "total": "267",
        "ok": "307",
        "ko": "175"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 166,
    "percentage": 17
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
    "count": 834,
    "percentage": 83
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "16.6",
        "ko": "83.4"
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
