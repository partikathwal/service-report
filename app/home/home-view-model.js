const observableModule = require("tns-core-modules/data/observable");

function HomeViewModel() {
    // const date = new Date();
    // const today = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        form: {
            date: new Date(),
            hours: 0,
            placements: 0,
            videos: 0,
            rvs: 0,
            jcah: false,
            notes: ""
        },
        isLoading: false
    });

    return viewModel;
}

module.exports = HomeViewModel;
