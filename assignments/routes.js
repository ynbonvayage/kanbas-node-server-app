import db from "../Database/index.js";
function AssignmentsRoutes(app) {
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = db.assignments
            .filter((m) => m.course === cid);
        res.send(assignments);
    });
}
export default AssignmentsRoutes;