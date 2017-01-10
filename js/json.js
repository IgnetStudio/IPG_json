// ordinary JavaScript objects

var QB_01 = {
    id: 1,
    answer: "prol",
    date: new Date(2017, 1, 1),
    value: false // no comma here
};

var QB_02 = {
    id: 2,
    answer: "rab",
    date: new Date(2017, 1, 2),
    value: true // no comma here
};

var QB_03 = {
    id: 3,
    answer: "sukkub",
    date: new Date(2017, 1, 3),
    value: false // no comma here
};

var QB_04 = {
    id: 4,
    answer: "wagabunda",
    date: new Date(2017, 1, 4),
    value: false // no comma here
};

// convert (stringify) object to json

var object_to_json_01 = JSON.stringify(QB_01, null, 4); // without function; with tab spaces

var object_to_json_02 = JSON.stringify(QB_02, function(k, v) {
    return v;  
}); // with function parameters k (key) & v (value); without tab spaces

// convert (parse) json to object

var json_to_object_01 = JSON.parse(object_to_json_01);

var json_to_object_02 = JSON.parse(object_to_json_02, function(k, v) {
    if (k === "date") {
        return new Date(Date.parse(v));
    }
    return v;
});