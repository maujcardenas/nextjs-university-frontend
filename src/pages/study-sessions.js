import DefaultLayout from "@/layouts/defaultLayout";
import React from "react";
import { updateCourseCompletion } from "../app/data/fetchData";

import { useEffect, useState } from "react";

const StudySessionsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(null);

  const handleUpdateClick = async () => {
    setIsLoading(true);
    try {
      const updatedData = await updateCourseCompletion("3", {
        currentCourseHours: 23,
        Grade: "A",
      });
      setUpdateStatus("Course Completion data updated successfully");
      console.log("handling button and trying to update coursecompletion");
    } catch (error) {
      setUpdateStatus("Error updating Course Completion data");
    } finally {
      setIsLoading(false);
      console.log("handling done");
    }
  };

  return (
    <DefaultLayout>
      <h1>hi</h1>
      <button
        className="bg-red-500 text-white"
        onClick={handleUpdateClick}
        disabled={isLoading}
      >
        {isLoading ? "Updating..." : "Update Student Data"}
      </button>
      {updateStatus && <p>{updateStatus}</p>}
    </DefaultLayout>
  );
};

export default StudySessionsPage;
