const HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

function onSubmit(args){
    let vm = args.object.page.bindingContext; 
    let form = vm.get("form");

    let url = "https://script.google.com/macros/s/AKfycbzvMuSwQ7jfHrUYB7lTYDe3UJbHyG7iipjYkV3PZYd1qMgItY5n/exec";
    let live = true ? "live=1234" : "";
    let action = "action=append";

    let date = new Date(form.date);
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let day = String(date.getDate()).padStart(2, "0");

    let record = "record=" + JSON.stringify({
        date: `${year}-${month}-${day}`,
        hours: form.hours,
        placements: form.placements,
        videos: form.videos,
        rvs: form.rvs,
        jcah: form.jcah,
        notes: form.notes
    })

    vm.set("isLoading", true);
    fetch(url + "?" + [live, action, record].join("&"), {
        method: "post"
    }).then(res => res.json()).then(function(response){
        console.log(response);
        clearForm(vm);
        alert({
            message: "Submitted successfully!",
            okButtonText: "OK",
            cancelable: true
        })
        vm.set("isLoading", false);
    })
}

function clearForm(vm){
    vm.set("form", {
        date: new Date(),
        hours: 0,
        placements: 0,
        videos: 0,
        rvs: 0,
        jcah: false,
        notes: ""
    })
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSubmit = onSubmit;
