module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index", {
            portfolios: [{
                    project: "",
                    github: "",
                    url: "",
                    img: ""
                },
                {
                    project: "",
                    github: "",
                    url: "",
                    img: ""
                },
                {
                    project: "",
                    github: "",
                    img: ""
                },

                {
                    project: "",
                    github: "",
                    img: ""
                },
            ]
        });
    });
};