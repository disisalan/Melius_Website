import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetail() {
    const { id } = useParams();
    console.log(id);
    return <div>ProjectDetail</div>;
}

export default ProjectDetail;
