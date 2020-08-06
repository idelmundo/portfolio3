module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index", {
            portfolios: [{
                    project: "happyPaw",
                    github: "https://github.com/idelmundo/project-2",
                    url: "https://happypaw.herokuapp.com/login",
                    img: "/img/husky.png"
                },
                {
                    project: "hangryFix",
                    github: "https://github.com/idelmundo/hangryfixed",
                    url: "https://idelmundo.github.io/hangryfixed/",
                    img: "/img/hangry.png"
                },
                {
                    project: "noteTaker",
                    github: "https://github.com/idelmundo/noteTaker",
                    url:"https://stormy-brushlands-00470.herokuapp.com/",
                    img: "/img/note.png"
                },

                {
                    project: "employeeManagement",
                    github: "https://github.com/idelmundo/employeeTracker",
                    img: "/img/employee.png"
                },
            ]
        });
    });
};