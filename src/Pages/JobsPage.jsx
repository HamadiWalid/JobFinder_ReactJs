import React from "react";
import JobListing from "../components/JobListing";
import JobListings from "../components/JobListings";
const JobsPage = () => {
  return (
    <section className="bg-gray-100 px-4 py-6">
      <JobListings />
    </section>
  );
};

export default JobsPage;
